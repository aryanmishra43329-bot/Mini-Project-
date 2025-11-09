
const loginForm = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const toggleBtn = document.createElement('span');
toggleBtn.textContent = '👁️';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.marginLeft = '10px';
toggleBtn.style.userSelect = 'none';
passwordInput.parentNode.insertBefore(toggleBtn, passwordInput.nextSibling);

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = '👁️';
  }
});
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username === '' || password === '') {
    alert('Please enter both username and password.');
    return;
  }
  const demoUser = {
    username: 'admin',
    password: '12345'
  };
  if (username === demoUser.username && password === demoUser.password) {
    alert(`Welcome back, ${username}! 🎉`);
    window.location.href = 'Chef.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
  usernameInput.value = '';
  passwordInput.value = '';
});
