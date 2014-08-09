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
    //var id = data[key].id;
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
      fetchCities(ui.item.value);
    }
  });
}

function fetchCities(info) {
  var timezone = info.slice(0, info.match(/\(/).index - 1);
  $.ajax({
    url: '/timezones/search',
    method: 'post',
    dataType: 'json',
    data: { name: timezone },
    success: function(data) {
      suggestCity(data);
    }
  });
}

function suggestCity(cities) {
  $('#city-input').focus(function() {
    $(this).autocomplete({
      source: cities,
      minLength: 0
    });
  });
}
