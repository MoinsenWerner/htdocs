document.addEventListener("DOMContentLoaded", function() {
    fetch('/counter/counter.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitorCount').textContent = data.visitorCount;
        })
        .catch(error => console.error('Error:', error));
});
