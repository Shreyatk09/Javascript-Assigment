document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");

  userError.textContent = "";
  passError.textContent = "";

  let valid = true;

  // Username validations
  if (!username) {
    userError.textContent = "Username is required.";
    valid = false;
  } else if (!username.includes("@")) {
    userError.textContent = "Invalid username. Must contain '@'.";
    valid = false;
  }

  // Password validations
  if (!password) {
    passError.textContent = "Password is required.";
    valid = false;
  } else if (password.length < 6 || !/\d/.test(password)) {
    passError.textContent = "Weak password. Must be 6+ characters and include a number.";
    valid = false;
  }

  if (valid) {
    alert("Login successful (demo purpose)!");
    // Add backend integration here if needed
  }
});