document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const sunIcon = themeToggleButton.querySelector('.feather-sun');
  const moonIcon = themeToggleButton.querySelector('.feather-moon');

  const applyTheme = (theme) => {
    const logoLight = document.getElementById('logo-light');
    const logoDark = document.getElementById('logo-dark');
    const aboutLogoLight = document.getElementById('about-logo-light');
    const aboutLogoDark = document.getElementById('about-logo-dark');
    
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
      
      // Show dark logo, hide light logo (if they exist)
      if (logoLight && logoDark) {
        logoLight.style.display = 'none';
        logoDark.style.display = 'inline-block';
      }
      
      // About page logos (if they exist)
      if (aboutLogoLight && aboutLogoDark) {
        aboutLogoLight.style.display = 'none';
        aboutLogoDark.style.display = 'inline-block';
      }
    } else {
      body.classList.remove('dark-theme');
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
      
      // Show light logo, hide dark logo (if they exist)
      if (logoLight && logoDark) {
        logoLight.style.display = 'inline-block';
        logoDark.style.display = 'none';
      }
      
      // About page logos (if they exist)
      if (aboutLogoLight && aboutLogoDark) {
        aboutLogoLight.style.display = 'inline-block';
        aboutLogoDark.style.display = 'none';
      }
    }
  };

  // Check for saved theme in sessionStorage
  const savedTheme = sessionStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Default to light theme unless system explicitly prefers dark
    //const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = 'light';
    applyTheme(defaultTheme);
    sessionStorage.setItem('theme', defaultTheme);
  }

  themeToggleButton.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  });

  // Listen for changes in prefers-color-scheme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply if user hasn't manually set a theme
    if (!sessionStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
      sessionStorage.setItem('theme', newTheme);
    }
  });
}); 