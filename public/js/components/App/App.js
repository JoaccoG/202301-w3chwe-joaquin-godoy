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
var _App_children, _App_cardList, _App_offset;
import Component from '../Component/Component.js';
import Header from '../Header/Header.js';
import Title from '../Title/Title.js';
import Pagination from '../Pagination/Pagination.js';
import CardList from '../Card-List/Card-List.js';
import { getPokemonList, pokemonsList } from '../../data/data.js';
export default class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'container');
        _App_children.set(this, void 0);
        _App_cardList.set(this, void 0);
        _App_offset.set(this, 0);
        __classPrivateFieldSet(this, _App_cardList, new CardList(this.domElement, pokemonsList), "f");
        __classPrivateFieldSet(this, _App_children, [
            new Header(document.body, ['./index.html', './pages/favorites.html'], ['Home', 'Favorites']),
            new Title(this.domElement, './assets/pokemon-logo.svg', 'logo'),
            new Pagination(this.domElement),
            new CardList(this.domElement, pokemonsList),
        ], "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_children, "f").forEach((children) => children.render());
    }
    getData() {
        return new Promise((resolve, reject) => {
            getPokemonList(__classPrivateFieldGet(this, _App_offset, "f"))
                .then(() => {
                resolve();
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
_App_children = new WeakMap(), _App_cardList = new WeakMap(), _App_offset = new WeakMap();
