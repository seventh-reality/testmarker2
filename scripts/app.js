// Handle file upload
document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

// 3D rendering logic using Three.js
// Add your Three.js code here
