// Basic 3D scene with Three.js
let scene, camera, renderer, cube;

function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 600/400, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(600, 400);
    document.getElementById('game-container').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Incremental game logic
let points = 0;
const pointsSpan = document.getElementById('points');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    points++;
    pointsSpan.textContent = points;
});

window.onload = () => {
    init3D();
    animate();
};