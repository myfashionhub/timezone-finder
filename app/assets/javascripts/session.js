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
    currentUser();

  } else {
    $('.error').html(data['msg']);
    showNotice('.error');
    loggedoutNav();
  }
}

function currentUser() {
  $.ajax({
    url: 'sessions',
    method: 'get',
    dataType: 'json',
    success: function(data) {
      var user_id = data.id;
      $('#user-show').attr('data', user_id);
      showEntries();
    },
    error: function(data) {
      $('.error').html('Session timeout.');
      showNotice('.error');
      logoutState();
    }
  });
}


function logout() {
  $.ajax({
    url: '/sessions',
    method: 'delete',
    success: function(data) {
      console.log(data);
      $('.notice').html('Successfully logged out.');
      showNotice('.notice');
      logoutState();
    }
  })
}


function logoutState() {
  location.hash = '';
  loggedoutNav();
  $('.content').children().hide();
  $('#new-session').fadeIn();
}

function currentTab() {
  if (location.hash === '#timezones') {
    $('#user-show').show();
    currentUser();
    $('#new-entry').show();
  } else if (location.hash === '#signup') {
    $('#new-user').show();
  }  else {
    $('#new-session').show();
  }
}
