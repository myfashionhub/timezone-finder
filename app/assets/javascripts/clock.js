function showTime() {
  var hourUtc = new Date().getUTCHours();
  var minute = new Date().getMinutes();
  var second = new Date().getSeconds();
  var times = $('.time');
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  for (var i = 0; i < times.length; i++) {
    var timeEl = times[i];
    $(timeEl).empty();
    var difference = parseInt($(timeEl).attr('data'));
    var hour = (hourUtc + difference) % 24;
    $(timeEl).append(hour + ':' + minute + ':' + second);
  }
}
