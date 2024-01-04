
document.addEventListener("DOMContentLoaded", function () {
  // Get user ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  // Fetch user data based on the user ID
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const userInfo = document.getElementById("user-info");

      const userElement = document.createElement("div");
      userElement.classList.add("user");
      userElement.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <!-- Add more user details as needed -->
            `;

      userInfo.appendChild(userElement);
    });
});
