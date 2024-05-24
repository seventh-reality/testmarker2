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
            loadModel(`/uploads/models/${file.name}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Add light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Function to load 3D model
function loadModel(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, function(gltf) {
        scene.add(gltf.scene);
    }, undefined, function(error) {
        console.error(error);
    });
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Initial camera position
camera.position.z = 5;
