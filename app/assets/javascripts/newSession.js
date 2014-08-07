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
