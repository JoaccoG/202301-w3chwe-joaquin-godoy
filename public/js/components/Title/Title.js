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
var _Title_logo;
import Component from '../Component/Component.js';
export default class Title extends Component {
    constructor(parentElement, src, alt) {
        super(parentElement, 'main__title', 'div');
        _Title_logo.set(this, void 0);
        __classPrivateFieldSet(this, _Title_logo, document.createElement('img'), "f");
        __classPrivateFieldGet(this, _Title_logo, "f").src = src;
        __classPrivateFieldGet(this, _Title_logo, "f").alt = alt;
    }
    render() {
        super.render();
        this.domElement.appendChild(__classPrivateFieldGet(this, _Title_logo, "f"));
    }
}
_Title_logo = new WeakMap();
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
