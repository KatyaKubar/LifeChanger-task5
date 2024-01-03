
/*$(document).ready(function () {
  // Fetch posts from API
  $.get("https://jsonplaceholder.typicode.com/posts", function (posts) {
    // Create a slider with 10 posts
    var slider = $("#slider");
    for (var i = 0; i < 10; i++) {
      var post = posts[i];
      slider.append("<div>" + post.title + "</div>");
    }

    // Fetch users from API
    $.get("https://jsonplaceholder.typicode.com/users", function (users) {
      var userList = $("#user-list");

      // Create a list of users with photos
      users.forEach(function (user) {
        userList.append(
          "<li><img src='user-photo-url-here' alt='" +
            user.name +
            "'><span>" +
            user.name +
            "</span></li>"
        );
      });

      // Handle click event on user list item
      userList.on("click", "li", function () {
        var userId = $(this).index() + 1; // Add 1 because API starts user ids from 1
        // Redirect to user details page with userId parameter
        window.location.href = "user-details.html?userId=" + userId;
      });
    });
  });
});*/
// main.js
document.addEventListener("DOMContentLoaded", function() {
  // Fetch posts from API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      // Create a slider with 10 posts
      var slider = document.getElementById("slider");
      for (var i = 0; i < 10; i++) {
        var post = posts[i];
        var postElement = document.createElement("div");
        postElement.textContent = post.title;
        slider.appendChild(postElement);
      }

      // Fetch users from API
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
          var userList = document.getElementById("user-list");

          // Create a list of users with photos
          users.forEach(function(user) {
            var userListItem = document.createElement("li");
            userListItem.innerHTML = "<img src='user-photo-url-here' alt='" + user.name + "'><span>" + user.name + "</span>";
            userList.appendChild(userListItem);

            // Handle click event on user list item
            userListItem.addEventListener("click", function() {
              var userId = Array.from(userListItem.parentNode.children).indexOf(userListItem) + 1;
              // Redirect to user details page with userId parameter
              window.location.href = "user-details.html?userId=" + userId;
            });
          });
        });
    });
});


