/*document.addEventListener("DOMContentLoaded", function () {
  // Fetch posts from API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      // Populate slider with posts
      var sliderContent = "";
      for (var i = 0; i < 3; i++) {
        sliderContent += "<div class='slide'>" + posts[i].title + "</div>";
      }
      document.getElementById("slider").innerHTML = sliderContent;

      // Fetch users from API
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          // Populate user list with photos and info
          var userListContent = "";
          for (var i = 0; i < 3; i++) {
            userListContent +=
              "<div class='user' data-user-id='" + users[i].id + "'>";
            userListContent +=
              "<img src='https://placekitten.com/100/100' alt='User Photo'>";
            userListContent += "<p>" + users[i].name + "</p>";
            userListContent += "</div>";
          }
          document.getElementById("user-list").innerHTML = userListContent;

          // Add click event for each user to navigate to their details page
          var usersElements = document.getElementsByClassName("user");
          for (var i = 0; i < usersElements.length; i++) {
            usersElements[i].addEventListener("click", function () {
              var userId = this.getAttribute("data-user-id");
              window.location.href = "user-details.html?userId=" + userId;
            });
          }
        });
    });
});*/
// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch posts for the slider
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postSlider = document.getElementById('post-slider');
            posts.slice(0, 10).forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
                postSlider.appendChild(postElement);
            });
        });

    // Fetch users for the user list
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.innerHTML = `<img src="https://kartinki.pics/uploads/posts/2021-07/1626190133_30-kartinkin-com-p-koti-piksel-art-art-krasivo-30.png" alt="${user.name}"><p>${user.name}</p>`;
                userElement.addEventListener('click', () => {
                    window.location.href = `user.html?userId=${user.id}`;
                });
                userList.appendChild(userElement);
            });
        });
});
