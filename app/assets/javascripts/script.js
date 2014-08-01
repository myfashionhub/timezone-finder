function showNotice(div) {
  if ($(div).html() != '') {
    $(div).fadeIn();
    setTimeout(function() {
      $(div).fadeOut();
    }, 3000);
  }
}
