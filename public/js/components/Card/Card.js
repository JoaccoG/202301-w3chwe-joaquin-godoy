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
var _Card_instances, _Card_cardData, _Card_getPokemonTypes, _Card_getFormattedZeros, _Card_getFormattedSizes;
import Component from '../Component/Component.js';
export default class Card extends Component {
    constructor(parentElement, cardData) {
        super(parentElement, 'card', 'article');
        _Card_instances.add(this);
        _Card_cardData.set(this, void 0);
        __classPrivateFieldSet(this, _Card_cardData, cardData, "f");
    }
    render() {
        super.render();
        this.domElement.innerHTML += `
      <div class="card-sprite__container">
        <img
          class="card__sprite"
          src=${__classPrivateFieldGet(this, _Card_cardData, "f").sprites.versions['generation-v']['black-white']
            .animated.front_default} alt="${__classPrivateFieldGet(this, _Card_cardData, "f").name}"
        >
      </div>
      <p class="card__id">${__classPrivateFieldGet(this, _Card_instances, "m", _Card_getFormattedZeros).call(this)}</p>
      <h3 class="card__name">${__classPrivateFieldGet(this, _Card_cardData, "f").name}</h3>
      <div class="card__info-size">
        <p>weight: <span>${__classPrivateFieldGet(this, _Card_instances, "m", _Card_getFormattedSizes).call(this, __classPrivateFieldGet(this, _Card_cardData, "f").weight)}</span>k</p>
        |
        <p>height: <span>${__classPrivateFieldGet(this, _Card_instances, "m", _Card_getFormattedSizes).call(this, __classPrivateFieldGet(this, _Card_cardData, "f").height)}</span>m</p>
      </div>
      <div class="card__info-type">
        ${__classPrivateFieldGet(this, _Card_instances, "m", _Card_getPokemonTypes).call(this)}
      </div>
    `;
    }
}
_Card_cardData = new WeakMap(), _Card_instances = new WeakSet(), _Card_getPokemonTypes = function _Card_getPokemonTypes() {
    let types = '';
    for (let type of __classPrivateFieldGet(this, _Card_cardData, "f").types) {
        types += `
        <img
          src="./assets/pokemon-types/${type.type.name}.png"
          alt="${__classPrivateFieldGet(this, _Card_cardData, "f").name}"
        >
      `;
    }
    return types;
}, _Card_getFormattedZeros = function _Card_getFormattedZeros() {
    let idToString = __classPrivateFieldGet(this, _Card_cardData, "f").id.toString();
    let numberOfZeros = 3 - idToString.length;
    return `N° ${numberOfZeros > 0 ? '0'.repeat(numberOfZeros) + idToString : idToString}`;
}, _Card_getFormattedSizes = function _Card_getFormattedSizes(data) {
    let dataToString = data.toString();
    let dataLength = dataToString.length;
    if (dataLength === 1) {
        return `0.${dataToString}`;
    }
    return `${dataToString.slice(0, dataLength - 1)}.${dataToString.slice(dataLength - 1)}`;
};
