console.log('opening the console is user error');

const action = document.getElementById('action')!;
const grace = 1500;

if (navigator) {
  if (navigator.userAgent) {
    if (/iPhone|iPad/.test(navigator.userAgent)) action.innerText = 'using iOS is';
  }
}

setTimeout(() => {
  action.innerText = 'doing nothing is';

  document.addEventListener('keypress', (e) => {
    if (e.key === ' ') action.innerText = 'pressing space is';
    else action.innerText = `pressing ${e.key.toLowerCase()} is`;
  });
  
  document.addEventListener('mousemove', (e) => {
    if (e.movementX > 40 || e.movementY > 40)
    action.innerText = 'moving the mouse too quickly is';
  });
  
  document.addEventListener('click', (e) => {
    let button;
    switch (e.button) {
      case 0:
        button = 'left';
        break;
      case 1:
        button = 'middle';
        break;
    }
    action.innerText = `${button} clicking is`;
  });
  
  document.addEventListener('contextmenu', () => {
    action.innerText = 'right clicking is';
  });
}, grace);

document.getElementById('language')!.addEventListener('click', () => {
  // Prevent left click overwriting it
  setTimeout(() => {
    action.innerText = `${window.navigator.language} is`
  }, 10)
})


window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  action.innerText = 'closing the tab is'
  e.returnValue = '';
})
