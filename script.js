// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Menu Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuSections = document.querySelectorAll('.menu-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and sections
    tabBtns.forEach(btn => btn.classList.remove('active'));
    menuSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Show corresponding section
    const sectionId = btn.getAttribute('data-section');
    document.getElementById(sectionId).classList.add('active');
  });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.error').forEach(el => el.remove());
    
    // Validate name
    if (name.value.trim() === '') {
      showError(name, 'Name is required');
      isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === '') {
      showError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, 'Please enter a valid email');
      isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
      showError(message, 'Message is required');
      isValid = false;
    }
    
    if (isValid) {
      // Form is valid, submit it
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    }
  });
}

function showError(input, message) {
  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.style.marginTop = '5px';
  error.style.fontSize = '0.8rem';
  error.textContent = message;
  input.parentNode.appendChild(error);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
