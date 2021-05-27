function click(triggered: Function) {
  document.addEventListener('click', (e) => {
    let button;
    switch (e.button) {
      case 0:
        button = 'left';
        break;
      case 1:
        button = 'middle';
        break;
      default:
        button = '';
        break;
    }
    triggered(`${button} clicking is`);
  });
}

export default click;
