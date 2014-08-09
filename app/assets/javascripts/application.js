//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require_tree .

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
  $('#save').click(saveTimezone);
});
