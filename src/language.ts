function language(triggered: Function) {
    document.getElementById('language')!.addEventListener('click', () => {
      // Prevent left click overwriting it
      setTimeout(() => {
        triggered(`${window.navigator.language} is`);
      }, 10);
    });
}

export default language;
