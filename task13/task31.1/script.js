// 13-1
// На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript),
// в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, сервер
// обробляє запит і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано
// в прикладі.

$(document).ready(function () {
  $("#vote-btn").click(function () {
    $.ajax({
      type: "GET",
      url: "server.php",
      success: function (response) {
        $("#vote-btn").text("Your vote is accepted:" + response);
      },
    });
  });
});
