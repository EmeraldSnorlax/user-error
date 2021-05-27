function ctxMenu(triggered: Function) {
  document.addEventListener('contextmenu', () => {
    triggered('opening the ctx menu is');
  });
}

export default ctxMenu;
