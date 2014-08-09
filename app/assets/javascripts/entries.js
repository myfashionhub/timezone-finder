function saveEntry() {
  var info = $('#timezone-input').val();
  var timezone = info.replace(info.match(/\s\(.+\)/)[0], '');
  var city = $('#city-input').val();
  $.ajax({
    url: '/entries',
    method: 'post',
    dataType: 'json',
    data: { timezone: timezone, city: city },
    success: function(data) {
      $('.notice').html('Timezone has been saved');
      showNotice('.notice');
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
    success: function(data) {
      displayEntries(data);
    }
  })
}

function displayEntries(data) {
  for (var obj in data) {
    var entry = $('<li>');
    var city = $('<h4>').html(data[obj].city);
    var timezone = $('<p>').html(data[obj].timezone);
    var difference = $('<p>');
    var diff = data[obj].difference;
    var currentTime = $('<p>').html('Current time: ');
    if (diff === 0) {
      difference.html('GMT');
    } else if (diff > 0) {
      difference.html('GMT +'+diff);
    } else {
      difference.html('GMT '+diff);
    }
    entry.append(city).append(timezone).append(difference).append(currentTime);
    $('.entries').append(entry).hide().slideDown();
  }
}
