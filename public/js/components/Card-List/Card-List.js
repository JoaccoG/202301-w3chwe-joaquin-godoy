var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CardList_cardListData;
import Component from '../Component/Component.js';
export default class CardList extends Component {
    constructor(parentElement, PokemonsList) {
        super(parentElement, 'card__list', 'ul');
        _CardList_cardListData.set(this, void 0);
        __classPrivateFieldSet(this, _CardList_cardListData, PokemonsList, "f");
    }
    render() {
        super.render();
    }
}
_CardList_cardListData = new WeakMap();
