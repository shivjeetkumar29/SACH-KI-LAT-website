// main.js - Final Code with Signup + Blog + Backend Call

document.addEventListener('DOMContentLoaded', () => {
  // Simulated logged-in user data
  const loggedInUser = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  // Blog auto-fill
  if (window.location.href.includes('blogs.html')) {
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
      const meta = card.querySelector('.blog-meta');
      if (meta && loggedInUser.name) {
        meta.textContent = `Date: ${new Date().toLocaleDateString()} | Author: ${loggedInUser.name}`;
      }
    });

    const writeBtn = document.querySelector('.btn-join[href="login.html"]');
    if (writeBtn && !loggedInUser.name) {
      writeBtn.addEventListener('click', (e) => {
        alert('Please log in to write a blog.');
        e.preventDefault();
      });
    }
  }

  // SJAF Form Fields (Dynamic)
  if (window.location.href.includes('sjaf.html')) {
    const categorySelect = document.getElementById('category');
    const formFields = document.getElementById('form-fields');

    categorySelect.addEventListener('change', () => {
      formFields.innerHTML = '';
      const category = categorySelect.value;
      let fields = '';

      switch (category) {
        case 'donor':
          fields = '<input type="number" placeholder="Donation Amount (INR)" required />';
          break;
        case 'advisor':
          fields = '<input type="text" placeholder="Expertise" required />';
          break;
        case 'member':
          fields = '<input type="text" placeholder="Experience" />';
          break;
        case 'employee':
          fields = '<input type="text" placeholder="Skills" required />';
          break;
        case 'intern':
          fields = '<input type="text" placeholder="Duration (Months)" required />';
          break;
      }
      formFields.innerHTML = fields;
    });
  }

  // Signup form handling
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch('http://13.233.9.148:5000/signup', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
        })
        .catch(error => {
          console.error('Signup Error:', error);
          alert('Signup failed. Please try again.');
        });
    });
  }

  // Backend test fetch
  fetch('http://13.233.9.148:5000/api/data')
    .then(response => response.json())
    .then(data => {
      console.log('Backend says:', data.message);
    })
    .catch(error => {
      console.error('Error connecting to backend:', error);
    });
});

// Hamburger menu
document.getElementById('hamburger-icon').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

// Close menu on outside click
document.addEventListener('click', function (event) {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger-icon');
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});
