document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
  
    // Add event listener to toggle dark mode
    document.getElementById('toggleDarkMode').addEventListener('click', function() {
      body.classList.toggle('dark-mode');
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultDisplay = document.getElementById('resultDisplay');
  
    const wordlist = {
      'apple': 'A fruit that grows on trees.',
      'banana': 'A long, curved fruit with a yellow skin.',
      'orange': 'A round citrus fruit with a tough bright orange skin.'
      // Add more words and their definitions as needed
    };
  
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase().trim();
  
      if (wordlist.hasOwnProperty(searchTerm)) {
        resultDisplay.innerHTML = `<p>${wordlist[searchTerm]}</p>`;
      } else {
        resultDisplay.innerHTML = ''; // Clear the result if no match
      }
    });
  });
  