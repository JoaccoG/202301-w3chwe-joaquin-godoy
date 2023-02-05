var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _App_childrens;
import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';
export default class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'container');
        _App_childrens.set(this, void 0);
        __classPrivateFieldSet(this, _App_childrens, [
            new Header(document.body, ['./index.html', './pages/favorites.html'], ['Home', 'Favorites']),
            new Title(this.domElement, './assets/pokemon-logo.svg', 'logo'),
        ], "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_childrens, "f").forEach((children) => children.render());
    }
}
_App_childrens = new WeakMap();
