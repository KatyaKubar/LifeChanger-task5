
document.addEventListener("DOMContentLoaded", function () {
  // slider
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      const postSlider = document.getElementById("post-slider");
      posts.slice(0, 10).forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postSlider.appendChild(postElement);
      });
    });

  // users
  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.innerHTML = `<img src="https://via.placeholder.com/600/68e0a8" alt="${user.name}"><p>${user.name}</p>`;
                userElement.addEventListener('click', () => {
                    window.location.href = `user.html?userId=${user.id}`;
                });
                userList.appendChild(userElement);
            });
        });
});
    
