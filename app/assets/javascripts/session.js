function newSession() {
  var email = $('#new-session').find('input[type="email"]').val().toLowerCase();
  var password = $('#new-session').find('input[type="password"]').val();
  $.ajax({
    url: 'sessions',
    method: 'post',
    dataType: 'json',
    data: { email: email, password: password },
    success: loginSuccess,
    error: function(err) {
      console.log(err);
    }
  });
}

function loginSuccess(data) {
  location.hash = '#timezones';
  if (data['msg'] === 'success') {
    $('.notice').html('You have logged in successfully');
    showNotice('.notice');
    loggedinNav();
    hideContent();
    $('#user-show').fadeIn();
    $('#new-entry').fadeIn();
  } else {
    $('.error').html(data['msg']);
    showNotice('.error');
    loggedoutNav();
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
      $('.content').empty();
      $('#new-session').fadeIn();
    }
  })
}


function currentTab() {
  if (location.hash === '#timezones') {
    $('#user-show').show();
    $('#new-entry').show();
  } else if (location.hash === '#signup') {
    $('#new-user').show();
  }  else {
    $('#new-session').show();
  }
}
