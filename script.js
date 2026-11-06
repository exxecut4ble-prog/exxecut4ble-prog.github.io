(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const themeIcon = document.querySelector('.theme-icon');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const iconSun = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>';
  const iconMoon = '<path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"/><path d="m16.5 4 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z"/>';

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('chingiz-theme'); } catch (_) {}
  const initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';

  function setTheme(theme, save = false) {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';
    toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    toggle.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
    themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
    themeIcon.innerHTML = isDark ? iconSun : iconMoon;
    themeColor.content = isDark ? '#0d1420' : '#f7f9fc';
    if (save) {
      try { localStorage.setItem('chingiz-theme', theme); } catch (_) {}
    }
  }

  setTheme(initialTheme);
  toggle.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
