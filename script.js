const cube = document.getElementById('cube');
let cubeSize = 200; // Initial cube size (in pixels)
let rotateX = -30;
let rotateY = 30;
let isMouseDown = false;
let lastMouseX = 0;
let lastMouseY = 0;

// Mouse down event to start dragging
window.addEventListener('mousedown', (event) => {
  isMouseDown = true;
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
});

// Mouse up event to stop dragging
window.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Mouse move event to rotate the cube
window.addEventListener('mousemove', (event) => {
  if (!isMouseDown) return;

  // Calculate the difference between current and previous mouse position
  const deltaX = event.clientX - lastMouseX;
  const deltaY = event.clientY - lastMouseY;

  // Update rotation angles
  rotateY += deltaX * 0.1; // Adjust sensitivity here
  rotateX -= deltaY * 0.1; // Adjust sensitivity here

  // Apply rotation to the cube
  cube.style.transform = `scale(${cubeSize / 200}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Update last mouse position
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
});

// Gradually resize the cube on scroll without a specific limit
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    cubeSize *= 1.05; // Gradually increase the size
  } else {
    cubeSize *= 0.95; // Gradually decrease the size
  }

  // Apply transformation based on updated size
  cube.style.transform = `scale(${cubeSize / 200}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Center the cube when the user stops interacting with it
window.addEventListener('mouseleave', () => {
  rotateX = -30;
  rotateY = 30;
  cube.style.transform = `scale(${cubeSize / 200}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
