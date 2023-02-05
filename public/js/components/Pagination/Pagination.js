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
export default class Pagination extends Component {
    constructor(parentElement) {
        super(parentElement, 'pag__container', 'div');
        _Pagination_leftArrow.set(this, void 0);
        _Pagination_rightArrow.set(this, void 0);
        __classPrivateFieldSet(this, _Pagination_leftArrow, document.createElement('div'), "f");
        __classPrivateFieldSet(this, _Pagination_rightArrow, document.createElement('div'), "f");
    }
    render() {
        super.render();
        this.generatePagination(__classPrivateFieldGet(this, _Pagination_leftArrow, "f"), 'left');
        this.generatePagination(__classPrivateFieldGet(this, _Pagination_rightArrow, "f"), 'right');
        this.eventHandlers();
    }
    generatePagination(arrow, direction) {
        arrow.innerHTML = `
        <i class="fa-solid fa-angle-${direction}"></i>
    `;
        arrow.className = `pag-container__${direction}`;
        this.domElement.appendChild(arrow);
    }
    eventHandlers() {
        let main = document.querySelector('.container');
        __classPrivateFieldGet(this, _Pagination_leftArrow, "f").addEventListener('click', () => {
            // if (this.#offset > 0) {
            //   this.#offset -= 20;
            //   getPokemonList(this.#offset).then(() => {
            //     pokemonsList.splice(-20, 20);
            //     this.#cardList.remove();
            //     if (main) {
            //       this.#cardList = new CardList(main, pokemonsList);
            //     }
            //     this.#cardList.render();
            //   });
            // } else {
            //   this.#offset = 0;
            // }
        });
        __classPrivateFieldGet(this, _Pagination_rightArrow, "f").addEventListener('click', () => {
            // if (this.#offset < 1000) {
            //   this.#offset += 20;
            //   getPokemonList(this.#offset).then(() => {
            //     pokemonsList.splice(0, 20);
            //     this.#cardList.remove();
            //     if (main) {
            //       this.#cardList = new CardList(main, pokemonsList);
            //     }
            //     this.#cardList.render();
            //   });
            // } else {
            //   this.#offset = 1000;
            // }
        });
    }
}
_Pagination_leftArrow = new WeakMap(), _Pagination_rightArrow = new WeakMap();
