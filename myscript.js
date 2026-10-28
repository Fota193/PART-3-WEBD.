
document.addEventListener('DOMContentLoaded', function() {

  const banner = document.getElementById('welcome-banner');
  if (banner) {
    banner.style.display = 'block';
  }

  const footerText = document.getElementById('footer-text');
  const currentYear = new Date().getFullYear();
  if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} La'maison Reve. All Rights Reserved`;
  }

  const listItems = document.querySelectorAll('main ul li');
  listItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (e.target.tagName !== 'A') {
        this.classList.toggle('highlighted');
      }
    });
  });
});