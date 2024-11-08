
function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === "abhinav" && password === "abhi123") {
      document.getElementById('login-panel').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      fetchGitHubUsers();
    } else {
      alert("Invalid login details.");
    }
  }
  
  
  async function fetchGitHubUsers() {
    try {
      const response = await fetch('https://api.github.com/users');
      const users = await response.json();
      const topUsers = users.slice(0, 10);
      displayUsers(topUsers);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  }
  
  
  function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = user.html_url;
      link.target = '_blank';
      link.textContent = user.login;
      listItem.appendChild(link);
      userList.appendChild(listItem);
    });
  }
  

  function sortUsers() {
    const sortOption = document.getElementById('sort-dropdown').value;
    const userList = document.getElementById('userList');
    const users = Array.from(userList.querySelectorAll('li')).map(li => ({
      name: li.textContent,
      element: li
    }));
    
    if (sortOption === "alphabetical") {
      users.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "default") {
      users.sort((a, b) => a.element.getAttribute('data-index') - b.element.getAttribute('data-index'));
    }
  
    userList.innerHTML = '';
    users.forEach(user => userList.appendChild(user.element));
  }
  

  function addAdditionalHeading() {
    const headingText = document.getElementById('additional-heading-input').value;
    if (headingText) {
      const additionalHeading = document.createElement('h2');
      additionalHeading.textContent = headingText;
      additionalHeading.classList.add('dashboard-heading');
      document.getElementById('dashboard').insertBefore(additionalHeading, document.querySelector('.user-details'));
      document.getElementById('additional-heading-input').value = '';
    }
  }
  