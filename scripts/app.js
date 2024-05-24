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
            if (file.name.endsWith('.gltf') || file.name.endsWith('.glb')) {
                loadModel(`/uploads/models/${file.name}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

function loadModel(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, function (gltf) {
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });
}
