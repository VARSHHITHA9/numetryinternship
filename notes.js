// Dummy user data
let users = [
    { username: "user1", password: "password1", notes: "" },
    { username: "user2", password: "password2", notes: "" }
  ];
  
  // Function to check if user exists
  function userExists(username) {
    return users.some(user => user.username === username);
  }
  
  // Function to validate login
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
        window.location.href = "fornotes.html?username=" + encodeURIComponent(username);
    } else {
      alert("Invalid username or password.");
    }
  }
  
  // Function to register new user
  function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (username && password && confirmPassword) {
      if (!userExists(username)) {
        if (password === confirmPassword) {
          users.push({ username, password, notes: "" });
          alert("Registration successful!");
          window.location.href = "fornotes.html"; // Redirect to notes page after registration
        } else {
          alert("Passwords do not match. Please try again.");
        }
      } else {
        alert("Username already exists. Please choose another one.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  }
  