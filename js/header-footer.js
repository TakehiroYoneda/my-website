// Load header
function loadHeader() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
}
  
// Load footer
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Read header and footer when loading the page
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});
  