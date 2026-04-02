// ============================================
//   Community Funeral Care — Scripts
// ============================================

// --- Sticky header shadow on scroll ---
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// --- Contact form handler (placeholder) ---
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Message Sent ✓';
  btn.disabled = true;
  btn.style.background = '#6B8F71';
  // TODO: wire up to email service (e.g. Formspree or EmailJS)
}
