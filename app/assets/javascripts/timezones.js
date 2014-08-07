function allTimezones() {
  $.ajax({
    url: '/timezones',
    method: 'get',
    dataType: 'json',
    success: function(data) {
      var timezones = [];
      for (var key in data) {
        timezones.push(data[key].name + ' ('+data[key].abbreviation+')');
      }

      $('#timezone-input').autocomplete({
        source: timezones,
        minLength: 2
      });
    }
  })
}
