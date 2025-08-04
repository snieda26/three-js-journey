import * as THREE from "three";

console.log(THREE);

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Box
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

mesh.position.x = -1.1;
mesh.position.y = 1;
mesh.position.z = -1;

// Change size
mesh.scale.x = 1;
mesh.scale.y = 1;
mesh.scale.z = 1;
mesh.scale.set(1, 1, 1);

// Rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.4;
mesh.rotation.y = Math.PI * 0.4;

// Get distance from camera to element - position.length()
console.log(mesh.position.length());

// Get distacnce from object to v (provided Vector3)
console.log(mesh.position.distanceTo(new THREE.Vector3()));

// Normalize position (put position 0,0,0)
mesh.position.normalize();

// Set position method
mesh.position.set(1, 1, 1);

// Axes helper (positive: red - x, green - y, blue - z)
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1);
scene.add(camera);

camera.position.z = 3;

// Move camera to Vector3 position
camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
