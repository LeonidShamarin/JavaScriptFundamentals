// На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript),
//  в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, 
//  завантажується файл books.json і з нього виводяться всі назви авторів у вигляді 
//  списку на HTML-сторінку.

// $(document).ready(function() {
//     $("#load-authors-btn").click(function() {
//         $.getJSON("books.json", function(data) {
//             var authors = "";
//             $.each(data.books, function(index, book) {
//                 authors += "<li>" + book.author + "</li>";
//             });
//             $("#authors-list").html(authors);
//         });
//     });
// });
$(document).ready(function() {
    $("#load-authors-btn").click(function() {
      $.ajax({
        url: "books.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
          var authors = "";
          $.each(data.books, function(index, book) {
            authors += "<li>" + book.author + "</li>";
          });
          $("#authors-list").html(authors);
        },
        error: function(xhr, status, error) {
          console.log("Error: " + error.message);
        }
      });
    });
  });
  
