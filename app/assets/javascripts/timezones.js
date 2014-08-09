function allTimezones() {
  $.ajax({
    url: '/timezones',
    method: 'get',
    dataType: 'json',
    success: function(data) {
      suggestTimezone(data);
    }
  });
}

function suggestTimezone(data) {
  var timezones = [];
  for (var key in data) {
    var difference;
    if (data[key].difference === 0) {
      difference = '';
    } else if (data[key].difference > 0) {
      difference = ' +' + data[key].difference;
    } else {
      difference = ' ' + data[key].difference;
    }    timezones.push(data[key].name + ' (GMT'+ difference +')');
  }

  $('#timezone-input').autocomplete({
    source: timezones,
    minLength: 1,
    select: function(event, ui) {

    }
  });

  $('#city-input').focus(function() {
    var cities = [];
    this.autocomplete({
      source: cities
    })
  });
}

function fetchCities() {
  var selected = ui.value;
  var info = $('#timezone-input').val();
  var difference;
  if (info.match(/\+?-?\d/) == null) {
    difference = 0;
  } else {
    difference = parseInt(info.match(/\+?-?\d/)[0]);
  }
  var timezone = info.replace(info.match(/\s\(.+\)/)[0], '');
  console.log(selected);
}

function saveTimezone() {

  var city = $('#city-input').val();
}
