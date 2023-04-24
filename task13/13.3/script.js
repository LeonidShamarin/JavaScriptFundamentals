// Використати сервіс 
// https://randomuser.me/
// Та при кожному завантаженні сторінки робити запит до API та рендерити базову 
// інформацію про користувача (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).


$(document).ready(function() {
    $("#load-user-btn").click(function() {
      $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function(data) {
          var user = data.results[0];
          var avatar = user.picture.large;
          var name = user.name.first + " " + user.name.last;
          var age = user.dob.age;
          var gender = user.gender;
          var country = user.location.country;
          var login = user.login.username;
          var password = user.login.password;
          var email = user.email;
  
          $(".user-avatar").attr("src", avatar);
          $(".user-name").text("Name: " + name);
          $(".user-age").text("Age: " + age);
          $(".user-gender").text("Gender: " + gender);
          $(".user-country").text("Country: " + country);
          $(".user-login").text("Login: " + login);
          $(".user-password").text("Password: " + password);
          $(".user-email").text("Email: " + email);
        }
      });
    });
  });
  