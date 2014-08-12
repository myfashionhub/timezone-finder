//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require_tree .

$(window).load(currentTab);

$(function() {
  hideContent();
  navigation();

  $('#new-user').submit(function(e) {
    e.preventDefault();
    newUser();
  });

  $('#new-session').submit(function(e) {
    newSession();
  });

  $('#logout').click(logout);

  allTimezones();
  $('#save').click(saveEntry);


  $('#refresh-time').click(showTime);
});
