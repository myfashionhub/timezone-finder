function saveEntry() {
  var info = $('#timezone-input').val();
  var timezone = info.replace(info.match(/\s\(.+\)/)[0], '');
  var city = $('#city-input').val();
  $('#new-entry').find('input').val('');

  $.ajax({
    url: '/entries',
    method: 'post',
    dataType: 'json',
    data: { timezone: timezone, city: city },
    success: function(data) {
      $('.notice').html('Timezone has been saved');
      showNotice('.notice');
      displayEntry(data);
      showTime();
    },
    error: function(data) {
      $('.error').html('Error saving timezone');
      showNotice('.error');
    }
  })
}

function showEntries() {
  var user_id = $('#user-show').attr('data');
  $.ajax({
    url: '/users/'+user_id,
    method: 'get',
    dataType: 'json',
    success: displayEntries
  });
}

function displayEntries(data) {
  $('.entries').empty();
  for (var obj in data) {
    displayEntry(data[obj])
  }
  setTimeout(showTime, 500);
}

function displayEntry(obj) {
  var entry = $('<li>').attr('data', obj.entry_id);
  var city = $('<h4>').html(obj.city);
  var timezone = $('<p>').html(obj.timezone);
  var difference = $('<p>');
  var diff = obj.difference;
  var currentTime = $('<p>').addClass('time').attr('data', diff).html('Current time: ');
  if (diff === 0) {
    difference.html('GMT');
  } else if (diff > 0) {
    difference.html('GMT +'+diff);
  } else {
    difference.html('GMT '+diff);
  }
  var remove = $('<button>').addClass('delete').html('Remove');
  entry.append(city).append(timezone).append(difference).append(currentTime).append(remove);
  $('.entries').append(entry).hide().slideDown();
  $('.delete').click(removeEntry);
}

function removeEntry(e) {
  var entry = $(e.target).parent();
  var entry_id = entry.attr('data');
  entry.slideUp().remove();
  $.ajax({
    url: '/entries/'+entry_id,
    method: 'delete',
    dataType: 'json',
    success: function(data) {
      $('.notice').html('Entry has been deleted');
      showNotice('.notice');
    },
    error: function(data) {
      $('.error').html('Unsuccessful deletion');
      showNotice('.error');
    }
  });
}
