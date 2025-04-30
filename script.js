document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('urlInput').value;

    // Validate the URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }

    // Load the website in the iframe
    const iframe = document.getElementById('proxyFrame');
    iframe.src = url;
});
