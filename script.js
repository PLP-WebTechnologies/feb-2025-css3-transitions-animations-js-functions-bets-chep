// Add bounce animation to a button on click
document.querySelector('.trigger-animation').addEventListener('click', () => {
  const button = document.querySelector('.bouncing-button');
  button.classList.toggle('bouncing-button');
});

// Save user preferences in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Retrieve user preferences from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Example: Save and retrieve theme preference
document.querySelector('#theme-toggle').addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
  document.body.className = currentTheme;
  savePreference('theme', currentTheme);
});

window.onload = () => {
  const savedTheme = getPreference('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};