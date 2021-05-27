import beforeUnload from './beforeUnload';
import click from './click';
import ctxMenu from './ctxMenu';
import keyPress from './keyPress';
import language from './language';
import mouseMove from './mouseMove';
import userAgent from './userAgent';

const action = document.getElementById('action')!;

// Default to the user's platform
const timeout = 2000;
let lastUpdate = Date.now();
function updateAction(update: string): void {
  action.innerText = update;
  lastUpdate = Date.now();
}
setInterval(() => {
  if ((Date.now() - lastUpdate) > timeout) {
    userAgent((update: string) => updateAction(update));
  }
}, 200);

// Add listeners
[beforeUnload, click, ctxMenu, keyPress, language, mouseMove].forEach((listener) => {
  listener((update: string) => updateAction(update));
});

// eslint-disable-next-line no-console
console.log('opening the console is user error');
