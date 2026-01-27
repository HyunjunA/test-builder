// shared.js — Dark mode toggle + nav active link + mobile hamburger
(function() {
  // Theme management
  function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }
  initTheme();

  document.addEventListener('DOMContentLoaded', () => {
    // Nav active link highlight
    const path = location.pathname.replace(/\/$/, '/index.html');
    document.querySelectorAll('.nav-links a, .tools-dropdown a').forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });

    // Mobile hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
    }

    // Tools dropdown (desktop)
    const toolsToggle = document.querySelector('.tools-toggle');
    const toolsDropdown = document.querySelector('.tools-dropdown');
    if (toolsToggle && toolsDropdown) {
      toolsToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toolsDropdown.classList.toggle('show');
      });
      document.addEventListener('click', (e) => {
        if (!toolsToggle.contains(e.target) && !toolsDropdown.contains(e.target)) {
          toolsDropdown.classList.remove('show');
        }
      });
    }
  });
})();
