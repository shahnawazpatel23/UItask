fetch('/data.php')
  .then((response) => response.json()) 
  .then((data) => {
   
    const paragraphElement = document.getElementById('certification-paragraph');
    paragraphElement.textContent = data.paragraph;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    const paragraphElement = document.getElementById('certification-paragraph');
    paragraphElement.textContent = 'Failed to load content. Please try again later.';
  });
