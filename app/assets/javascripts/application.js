//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  $('.notice').hide();
  $('.error').hide();
  $('#new-session').hide();
  $('#new-user').hide();

  navigation();

  $('#new-user').submit(function(e) {
    e.preventDefault();
    newUser();
  });

  $('#new-session').submit(function(e) {
    newSession();
  });

  $('#logout').click(logout);

});
