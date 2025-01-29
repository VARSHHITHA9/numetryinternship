// script.js
function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;

  // Make a POST request to your URL shortening API endpoint
  // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
  fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      originalUrl: originalUrl
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("shortenedUrl").value = data.shortenedUrl;
    document.getElementById("shortenedUrlContainer").style.display = "block";
  })
  .catch(error => console.error('Error:', error));
}
