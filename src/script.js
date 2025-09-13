import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl");



// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
scene.add(group);

// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
//   new THREE.MeshBasicMaterial({ color: "red", wireframe: true }),
// );
// group.add(cube1);

// const positionsArray = new Float32Array([
//   0,0,0,
//   0,1,0,
//   1,0,0
// ])

// const positionAttribute = new THREE.BufferAttribute(positionsArray, 3)

const geometry = new THREE.BufferGeometry()

const count = 5000;
const positionsArray = new Float32Array(count * 3 * 3)

for(let i = 0; i < count * 3 * 3; i++) {
  positionsArray[i] = Math.random() - 0.5
}


const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)


const material = new THREE.MeshBasicMaterial({
  color: 'red',
  wireframe: true
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  console.log('resize')
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight


  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()


  // Update the renderer
  renderer.setSize(sizes.width, sizes.height)
})


// open/close full screen mode
window.addEventListener('dblclick', () => {
  if(!document.fullscreenElement) {
    canvas.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})


// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);

scene.add(camera);
camera.position.z = 2;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const controls = new OrbitControls(camera, canvas);
controls.enabled = true;
controls.enableDamping = true;

function trick() {
  renderer.render(scene, camera);

  // Update controles during every frame (to make damping working correctly)
  controls.update();

  window.requestAnimationFrame(trick);
}

trick();
