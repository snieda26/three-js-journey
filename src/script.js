import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
scene.add(group);

// Change group position
group.position.set(1, 1.5);
group.rotation.x = Math.PI * 0.25;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" }),
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" }),
);
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" }),
);
cube3.position.x = 1.5;
group.add(cube3);

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

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
