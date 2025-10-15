document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  document.getElementById('firstName').textContent = urlParams.get('first') || '';
  document.getElementById('lastName').textContent = urlParams.get('last') || '';
  document.getElementById('email').textContent = urlParams.get('email') || '';
  document.getElementById('phone').textContent = urlParams.get('phone') || '';
  document.getElementById('dateSubmitted').textContent = urlParams.get('date') || '';
  document.getElementById('timeSubmitted').textContent = urlParams.get('time') || '';
});