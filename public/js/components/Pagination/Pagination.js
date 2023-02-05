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
var _Pagination_leftArrow, _Pagination_rightArrow, _Pagination_offset, _Pagination_cardList;
import Component from '../Component/Component.js';
import { pokemonsList, getPokemonList } from '../../data/data.js';
import CardList from '../Card-List/Card-List.js';
export default class Pagination extends Component {
    constructor(parentElement, cardList) {
        super(parentElement, 'pag__container', 'div');
        _Pagination_leftArrow.set(this, void 0);
        _Pagination_rightArrow.set(this, void 0);
        _Pagination_offset.set(this, void 0);
        _Pagination_cardList.set(this, void 0);
        __classPrivateFieldSet(this, _Pagination_offset, 0, "f");
        __classPrivateFieldSet(this, _Pagination_cardList, cardList, "f");
        __classPrivateFieldSet(this, _Pagination_leftArrow, this.generatePagination('left'), "f");
        __classPrivateFieldSet(this, _Pagination_rightArrow, this.generatePagination('right'), "f");
    }
    render() {
        super.render();
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
        let main = document.querySelector('.container');
        __classPrivateFieldGet(this, _Pagination_leftArrow, "f").addEventListener('click', () => {
            __classPrivateFieldGet(this, _Pagination_offset, "f") > 0 ? (__classPrivateFieldSet(this, _Pagination_offset, __classPrivateFieldGet(this, _Pagination_offset, "f") - 20, "f")) : (__classPrivateFieldSet(this, _Pagination_offset, 0, "f"));
            getPokemonList(__classPrivateFieldGet(this, _Pagination_offset, "f")).then(() => {
                pokemonsList.splice(-20, 20);
                __classPrivateFieldGet(this, _Pagination_cardList, "f").remove();
                if (main) {
                    __classPrivateFieldSet(this, _Pagination_cardList, new CardList(main, pokemonsList), "f");
                }
                __classPrivateFieldGet(this, _Pagination_cardList, "f").render();
            });
        });
        __classPrivateFieldGet(this, _Pagination_rightArrow, "f").addEventListener('click', () => {
            __classPrivateFieldGet(this, _Pagination_offset, "f") < 1000 ? (__classPrivateFieldSet(this, _Pagination_offset, __classPrivateFieldGet(this, _Pagination_offset, "f") + 20, "f")) : (__classPrivateFieldSet(this, _Pagination_offset, 1000, "f"));
            getPokemonList(__classPrivateFieldGet(this, _Pagination_offset, "f")).then(() => {
                pokemonsList.splice(0, 20);
                __classPrivateFieldGet(this, _Pagination_cardList, "f").remove();
                if (main) {
                    __classPrivateFieldSet(this, _Pagination_cardList, new CardList(main, pokemonsList), "f");
                }
                __classPrivateFieldGet(this, _Pagination_cardList, "f").render();
            });
        });
    }
}
_Pagination_leftArrow = new WeakMap(), _Pagination_rightArrow = new WeakMap(), _Pagination_offset = new WeakMap(), _Pagination_cardList = new WeakMap();
