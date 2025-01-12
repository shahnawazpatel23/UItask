// popular.js

// Fetch data from the backend
fetch('/data.php')
  .then((response) => response.json()) // Parse the JSON response
  .then((data) => {
    // Update the paragraph content
    const paragraphElement = document.getElementById('certification-paragraph');
    paragraphElement.textContent = data.paragraph;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    const paragraphElement = document.getElementById('certification-paragraph');
    paragraphElement.textContent = 'Failed to load content. Please try again later.';
  });
