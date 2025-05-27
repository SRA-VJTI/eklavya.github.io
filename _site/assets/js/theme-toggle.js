document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const sunIcon = themeToggleButton.querySelector('.feather-sun');
  const moonIcon = themeToggleButton.querySelector('.feather-moon');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
    } else {
      body.classList.remove('dark-theme');
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
    }
  };

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Check for prefers-color-scheme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggleButton.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Listen for changes in prefers-color-scheme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply if user hasn't manually set a theme
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}); 