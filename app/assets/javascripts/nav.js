function showNotice(div) {
  if ($(div).html() != '') {
    $(div).fadeIn();
    setTimeout(function() {
      $(div).fadeOut();
    }, 3000);
  }
}


function navigation() {
  $('#login').click(function() {
    hideContent();
    $('#new-session').fadeIn();
  });

  $('#signup').click(function() {
    hideContent();
    $('#new-user').fadeIn();
  });

  $('#timezones').click(function() {
    hideContent();
    $('#user-show').fadeIn();
    currentUser();
    $('#new-entry').fadeIn();
  });
}

function hideContent() {
  $('.notice').hide();
  $('.error').hide();
  $('.content').children().hide();
}

function loggedinNav() {
  $('#login').hide();
  $('#signup').hide();
  $('#logout').show();
  $('#timezones').show();
}

function loggedoutNav() {
  $('#login').show();
  $('#signup').show();
  $('#logout').hide();
  $('#timezones').hide();
}
