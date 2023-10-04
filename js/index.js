function searchUsers(name) {
    fetch(`https://api.github.com/search/users?q=${name}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        // Pass the items array to displayUsers
        displayUsers(data.items); 
      })
      .catch((error) => {
        console.error("Error fetching data from GitHub API:", error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#github-form').addEventListener('submit', (e) => {
      e.preventDefault();
  
      let findUser = e.target.querySelector('#search').value;
      console.log(findUser);
      // Call searchUsers instead of handleSearch
      searchUsers(findUser); 
    });
  });
  
  function displayUsers(users) {
    const userList = document.querySelector('#user-list');
    // Clear previous search results
    userList.innerHTML = ''; 
  
    //search display information about the users to the page.
    users.forEach((user) => {
      const { login, avatar_url, repos_url } = user;
      
      const userContainer = document.createElement('div');
      userContainer.classList.add('user-container');
      
      const avatarImg = document.createElement('img');
      avatarImg.src = avatar_url;
      
      const loginLink = document.createElement('a');
      loginLink.href = repos_url;
      loginLink.textContent = login;
      
      userContainer.appendChild(avatarImg);
      userContainer.appendChild(loginLink);
      
      userList.appendChild(userContainer);
    });
  }



  
