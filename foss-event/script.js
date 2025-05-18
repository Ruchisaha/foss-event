document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop form from reloading the page
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      console.log("Entered Email:", email);
      console.log("Entered Password:", password);
  
      if (email === "user@example.com" && password === "123456") {
        alert("🎉 Login successful! Welcome.");
        // redirect if needed
        // window.location.href = "home.html";
      } else {
        alert("❌ Invalid email or password. Please try again.");
      }
    });
  
    // Forgot Password
    document.querySelector(".extra-links a[href='#']").addEventListener("click", function (e) {
      e.preventDefault();
      alert("🔐 Forgot Password feature coming soon!");
    });
  
    // Create Account
    document.querySelectorAll(".extra-links a")[1].addEventListener("click", function (e) {
      e.preventDefault();
      alert("✨ Create Account feature coming soon!");
    });
  });
  