//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  $('.notice').hide();
  $('.error').hide();

  $('#new-user').submit(function(e) {
    e.preventDefault();
    newUser();
  });
  //newSession()

  $('#logout').click(logout);
  $('#login').click(loginPage);
});
