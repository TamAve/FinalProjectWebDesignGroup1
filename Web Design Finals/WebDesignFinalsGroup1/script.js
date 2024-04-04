
function toggleDarkMode() {
    const body = document.body;
    const nav = document.getElementById('nav')
    const darkModeButton = document.querySelector('.darkmode-btn');

    if (body.classList.contains('dark-mode')) {
        nav.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        darkModeButton.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    } else {
        nav.classList.add('dark-mode');
        body.classList.add('dark-mode');
        darkModeButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
}

function showPage(page) {
        var homePage = document.getElementById('home');
        var contactPage = document.getElementById('contact');
        var aboutPage = document.getElementById('about');
        var loginPage = document.getElementById('login');
        
        if (page === 'home') {
            homePage.style.display = 'block';
            contactPage.style.display = 'none';
            aboutPage.style.display = 'none';
            loginPage.style.display = 'none';
        } else if (page === 'contact') {
            homePage.style.display = 'none';
            contactPage.style.display = 'block';
            aboutPage.style.display = 'none';
            loginPage.style.display = 'none';
        } else if (page === 'about') {
            homePage.style.display = 'none';
            contactPage.style.display = 'none';
            aboutPage.style.display = 'block';
            loginPage.style.display = 'none';
        } else if (page === 'login') {
            homePage.style.display = 'none';
            contactPage.style.display = 'none';
            aboutPage.style.display = 'none';
            loginPage.style.display = 'block';
        }
    }

function validateForm() {
    var title = document.getElementById("title").value;
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dateOfVisit = document.getElementById("date_of_visit").value;
    var timeOfVisit = document.getElementById("time_of_visit").value;

    // Check if any required field is empty
    if (title === "" || firstName === "" || lastName === "" || email === "" || phone === "" || dateOfVisit === "" || timeOfVisit === "") {
      alert("Please fill in all required fields.");
      return false; // Prevent form submission
    }

    // Check if email format is valid
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false; // Prevent form submission
    }

    // Check if phone number format is valid
    var phonePattern = /^\d{10}$/; // Assuming phone number has 10 digits
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false; // Prevent form submission
    }

    // Additional custom validations can be added as needed

    // If all validations pass, return true to allow form submission
    return true;
  }

  // Replace specific words in the terms1 paragraph
  document.getElementById('terms').innerHTML = '<a href="terms.html">Terms and Conditions</a>';
  document.getElementById('privacy').innerHTML = '<a href="privacy.html">Privacy Policy</a>';







  function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function checkAgreement() {
    if (document.getElementById("termsCheckbox").checked) {
        agreeAndRegister();
    } else {
        alert("Please agree to the Terms and Conditions before registering.");
    }
}

function agreeAndRegister() {
    alert("Registration successful!"); // Placeholder for actual registration logic
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

document.getElementById("termsCheckbox").addEventListener("change", function() {
    if (this.checked) {
        openModal();
    } else {
        closeModal();
    }
});

function login() {
    
    window.location.href = "index.html";
}




  


