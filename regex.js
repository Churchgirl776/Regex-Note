    // 1. Find all occurrences of "regular"
    function findRegular() {
      let content = document.getElementById("content").innerText;
      let regex = /\bA\b/gi;
      let matches = content.match(regex);
      let resultDiv = document.getElementById("results");

      if (matches) {
        resultDiv.innerHTML = `Found <strong>${matches.length}</strong> occurrence(s): [${matches.join(', ')}]`;
      } else {
        resultDiv.innerHTML = "No matches found.";
      }
    }

     // Live email validation
    document.getElementById("email").addEventListener("input", function () {
      let email = this.value;
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let feedback = document.getElementById("emailFeedback");

      if (emailRegex.test(email)) {
        feedback.textContent = "Valid email ✔️";
        feedback.className = "feedback success";
      } else {
        feedback.textContent = "Invalid email ❌";
        feedback.className = "feedback error";
      }
    });

    // Live password strength check
    document.getElementById("password").addEventListener("input", function () {
      let password = this.value;
      let feedback = document.getElementById("passwordFeedback");

      if (password.length < 6) {
        feedback.textContent = "Too short ❌";
        feedback.className = "feedback weak";
      } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
          feedback.textContent = "Strong password ✔️";
          feedback.className = "feedback strong";
        } else {
          feedback.textContent = "Medium strength: add a symbol to make it stronger!";
          feedback.className = "feedback medium";
        }
      } else {
        feedback.textContent = "Weak: Add uppercase, lowercase and a number!";
        feedback.className = "feedback weak";
      }
    });

    // Form submission validation
    document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault();
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let messageDiv = document.getElementById("formMessage");

    //   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    let passwordRegex = /^(?=.*[A-Za-z0-9])$/;

      if (!emailRegex.test(email)) {
        messageDiv.innerHTML = "<p class='error'>Invalid email format.</p>";
        return;
      }

      if (!passwordRegex.test(password)) {
        messageDiv.innerHTML = "<p class='error'>Password must be at least 8 characters, with uppercase, lowercase, number, and special character.</p>";
        return;
      }

      messageDiv.innerHTML = "<p class='success'>Form submitted successfully! ✅</p>";
    });