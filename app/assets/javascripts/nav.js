function showNotice(div) {
  if ($(div).html() != '') {
    $(div).fadeIn();
    setTimeout(function() {
      $(div).fadeOut();
    }, 3000);
  }
}

function logout() {
  $.ajax({
    url: '/sessions',
    method: 'delete',
    success: function(data) {
      console.log(data);
      $('.notice').html('Successfully logged out.');
      showNotice('.notice');
      loggedoutNav();
    }
  })
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
}

function hideContent() {
  var currentContents = $('.content').children();
  currentContents.hide();
}

function loggedinNav() {
  console.log('log in nav');
  $('#login').hide();
  $('#signup').hide();
  $('#logout').show();
  $('#timezones').show();
}

function loggedoutNav() {
  console.log('log out nav');
  $('#login').show();
  $('#signup').show();
  $('#logout').hide();
  $('#timezones').hide();
}
