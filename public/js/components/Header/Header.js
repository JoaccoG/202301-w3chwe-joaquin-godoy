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
var _Header_parentElement, _Header_navbar, _Header_navbarMenu;
import Component from '../Component/Component.js';
export default class Header extends Component {
    constructor(parentElement, href, text) {
        super(parentElement, 'header', 'header');
        _Header_parentElement.set(this, void 0);
        _Header_navbar.set(this, void 0);
        _Header_navbarMenu.set(this, void 0);
        __classPrivateFieldSet(this, _Header_parentElement, parentElement, "f");
        __classPrivateFieldSet(this, _Header_navbar, document.createElement('nav'), "f");
        __classPrivateFieldGet(this, _Header_navbar, "f").className = 'navbar';
        __classPrivateFieldSet(this, _Header_navbarMenu, document.createElement('ul'), "f");
        __classPrivateFieldGet(this, _Header_navbarMenu, "f").className = 'navbar__menu';
        for (let i = 0; i < href.length; i++) {
            this.addLiElement(href[i], text[i]);
        }
    }
    render() {
        __classPrivateFieldGet(this, _Header_parentElement, "f").prepend(this.domElement);
        this.domElement.appendChild(__classPrivateFieldGet(this, _Header_navbar, "f"));
        __classPrivateFieldGet(this, _Header_navbar, "f").appendChild(__classPrivateFieldGet(this, _Header_navbarMenu, "f"));
    }
    addLiElement(href, text) {
        __classPrivateFieldGet(this, _Header_navbarMenu, "f").innerHTML += `
      <li>
        <a href="${href}">${text}</a>
      </li>
    `;
    }
}
_Header_parentElement = new WeakMap(), _Header_navbar = new WeakMap(), _Header_navbarMenu = new WeakMap();
