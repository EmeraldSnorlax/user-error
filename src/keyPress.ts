function keyPress(triggered: Function) {
  document.addEventListener('keypress', (e) => {
    if (e.key === ' ') triggered('pressing space is');
    else triggered(`pressing ${e.key.toLowerCase()} is`);
  });
}

export default keyPress;
