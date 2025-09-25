const urlParams = new URLSearchParams(window.location.search);
document.getElementById('firstName').textContent = urlParams.get('first');
document.getElementById('lastName').textContent = urlParams.get('last');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('organization').textContent = urlParams.get('organization');
document.getElementById('timestamp').textContent = urlParams.get('timestamp');
