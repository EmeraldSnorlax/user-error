function mouseMove(triggered: Function) {
  document.addEventListener('mousemove', (e) => {
    if (e.movementX > 40 || e.movementY > 40) triggered('moving the mouse too quickly is');
  });
}

export default mouseMove;
