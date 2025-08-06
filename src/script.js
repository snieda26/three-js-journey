import * as THREE from "three";
import gsap from "gsap";

const canvas = document.querySelector("canvas.webgl");

const cursor = {
  x: 0,
  y: 0,
};
document.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;

  console.log(cursor);
});

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" }),
);
cube1.position.y = 1.5;
group.add(cube1);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100,
// );
scene.add(camera);
camera.lookAt(cube1.position);

camera.position.set(2, 2, 2);
// camera.lookAt(cube1.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

gsap.to(cube1.position, { duration: 1, delay: 1, x: 2 });
gsap.to(cube1.position, { duration: 1, delay: 2, x: 0 });

let clock = new THREE.Clock();

function trick() {
  const elapsedTime = clock.getElapsedTime();

  // cube1.rotation.y = elapsedTime;
  cube1.position.x = cursor.x;
  cube1.position.y = cursor.y;

  renderer.render(scene, camera);

  window.requestAnimationFrame(trick);
}

trick();
