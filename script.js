function applyRainbowText() {
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');

    headers.forEach(header => {
        const words = header.textContent.split(' ');
        header.innerHTML = words.map(word => `<span class="rainbow-text">${word}</span>`).join(' ');
    });
}

document.addEventListener('DOMContentLoaded', applyRainbowText);


