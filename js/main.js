// js/main.js - JavaScript for Dynamic Functionality

// Check Login Status and Auto-fill Blog Details
document.addEventListener('DOMContentLoaded', () => {
  // Simulated logged-in user data (replace with actual authentication)
  const loggedInUser = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  // Auto-fill blog details if logged in
  if (window.location.href.includes('blogs.html')) {
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
      const meta = card.querySelector('.blog-meta');
      if (meta && loggedInUser.name) {
        meta.textContent = `Date: ${new Date().toLocaleDateString()} | Author: ${loggedInUser.name}`;
      }
    });

    // Restrict editing (simulated)
    const writeBtn = document.querySelector('.btn-join[href="login.html"]');
    if (writeBtn && !loggedInUser.name) {
      writeBtn.addEventListener('click', (e) => {
        alert('Please log in to write a blog.');
        e.preventDefault();
      });
    }
  }

  // Dynamic SJAF Form Fields based on Category
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
});

// Hamburger Menu Toggle Functionality
document.getElementById('hamburger-icon').addEventListener('click', function() {
document.getElementById('nav-links').classList.toggle('active');
});

// Close Menu When Clicking Outside (Optional)
document.addEventListener('click', function(event) {
const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger-icon');
if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
  navLinks.classList.remove('active');
}
});

fetch('http://13.233.9.148:5000/api/data')

  .then(response => response.json())
  .then(data => {
      console.log(data); // Backend se response
  })
  .catch(error => {
      console.error('Error:', error); // Agar error aaye toh
  });
