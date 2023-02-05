import App from './components/App/App.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App(document.body);
  app.getData().then(() => {
    app.render();
    document.querySelector<HTMLElement>('.fa-angle-left')?.click();
  });
});
