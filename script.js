// Function to wrap each word in a span with a class for rainbow animation
function applyRainbowText() {
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Select all header elements

    headers.forEach(header => {
        const words = header.textContent.split(' ');
        header.innerHTML = words.map(word => `<span class="rainbow-text">${word}</span>`).join(' ');
    });
}

// Call the function to apply the effect when the DOM content is loaded
document.addEventListener('DOMContentLoaded', applyRainbowText);


