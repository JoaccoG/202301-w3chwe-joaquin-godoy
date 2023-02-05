import App from './components/App/App.js';
document.addEventListener('DOMContentLoaded', () => {
    const app = new App(document.body);
    app.getData().then(() => {
        var _a;
        app.render();
        (_a = document.querySelector('.fa-angle-left')) === null || _a === void 0 ? void 0 : _a.click();
    });
});
