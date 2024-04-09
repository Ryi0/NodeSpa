document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('ul li a'); // Select all anchor tags within list items
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation behavior

            // Fetch and load the content of the href attribute
            var url = this.getAttribute('href');
            loadContent(url);
        });
    });
});

function loadContent(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Update the content container with the loaded HTML
        document.getElementById('content-container').innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}