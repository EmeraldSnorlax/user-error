function beforeUnload(triggered: Function) {
  window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    triggered('closing the tab is');
    e.returnValue = '';
  });
}

export default beforeUnload;
