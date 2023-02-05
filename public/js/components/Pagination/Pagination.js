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
var _Pagination_leftArrow, _Pagination_rightArrow;
import Component from '../Component/Component.js';
export let actualOffsetNumber = 0;
export default class Pagination extends Component {
    constructor(parentElement) {
        super(parentElement, 'pag__container', 'div');
        _Pagination_leftArrow.set(this, void 0);
        _Pagination_rightArrow.set(this, void 0);
    }
    render() {
        super.render();
        __classPrivateFieldSet(this, _Pagination_leftArrow, this.generatePagination('left'), "f");
        __classPrivateFieldSet(this, _Pagination_rightArrow, this.generatePagination('right'), "f");
        this.eventHandlers();
    }
    generatePagination(direction) {
        let container = document.createElement('div');
        container.className = `pag-container__${direction}`;
        let arrow = document.createElement('i');
        arrow.className = `fa-solid fa-angle-${direction}`;
        container.appendChild(arrow);
        this.domElement.appendChild(container);
        return container;
    }
    eventHandlers() {
        __classPrivateFieldGet(this, _Pagination_leftArrow, "f").addEventListener('click', () => {
            actualOffsetNumber = actualOffsetNumber - 20;
            console.log('previous');
        });
        __classPrivateFieldGet(this, _Pagination_rightArrow, "f").addEventListener('click', () => {
            console.log('next');
        });
    }
}
_Pagination_leftArrow = new WeakMap(), _Pagination_rightArrow = new WeakMap();
