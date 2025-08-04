import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" }),
);
group.add(cube1);

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

// function trick() {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;

//   time = currentTime;

//   cube1.rotation.y -= 0.001 * deltaTime;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(trick);
// }

let clock = new THREE.Clock();

function trick() {
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);

  cube1.rotation.y = elapsedTime;

  renderer.render(scene, camera);
  window.requestAnimationFrame(trick);
}

trick();
