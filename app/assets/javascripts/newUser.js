function newUser() {
  var email = $('#new-user').find('input[type="email"]').val().toLowerCase();
  var password = $('#new-user').find('input[type="password"]').val();
  email.val() = '';
  password.val() = '';

  if (validatePassword(password) === true) {
    createUser(email, password);
  }
}

function createUser(email, password) {
  $.ajax({
    url: 'users',
    method: 'post',
    dataType: 'json',
    data: { user: { email: email, password: password } },
    success: function(data) {
      $('.notice').html('User successfully created. Please log in.');
      showNotice('.notice');
    },
    error: function(err) {
      $('.error').html($(err.responseText).find('h2').html());
      showNotice('.error');
      console.log(err)
    }
  });
}

function newSession() {
  var email = $('#new-session').find('input[type="email"]').val().toLowerCase();
  var password = $('#new-session').find('input[type="password"]').val();
  $.ajax({
    url: 'sessions',
    method: 'post',
    dataType: 'json',
    data: { email: email, password: password },
    success: function(data) {
      if (data['msg'] === 'success') {
        $('.notice').html('You have logged in successfully');
        showNotice('.notice');
        loggedinNav();
      } else {
        $('.error').html(data['msg']);
        showNotice('.error');
        loggedoutNav();
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}
