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
var _Card_cardData;
import Component from '../Component/Component.js';
export default class Card extends Component {
    constructor(parentElement, cardData) {
        super(parentElement, 'card', 'article');
        _Card_cardData.set(this, void 0);
        __classPrivateFieldSet(this, _Card_cardData, cardData, "f");
    }
    render() {
        super.render();
        let types = '';
        for (let type of __classPrivateFieldGet(this, _Card_cardData, "f").types) {
            types += `
        <img
          src="./assets/pokemon-types/${type.type.name}"
          alt="${__classPrivateFieldGet(this, _Card_cardData, "f").name}"
        >
      `;
        }
        this.domElement.innerHTML += `
      <div class="card-sprite__container">
        <img
          class="card__sprite"
          src=${__classPrivateFieldGet(this, _Card_cardData, "f").sprites.versions['generation-v']['black-white']
            .animated.front_default} alt="${__classPrivateFieldGet(this, _Card_cardData, "f").name}"
        >
      </div>
      <p class="card__id">N° ${__classPrivateFieldGet(this, _Card_cardData, "f").id}/151</p>
      <h3 class="card__name">${__classPrivateFieldGet(this, _Card_cardData, "f").name}</h3>
      <div class="card__info-size">
        <p>weight: <span>${__classPrivateFieldGet(this, _Card_cardData, "f").weight}</span></p>
        |
        <p>height: <span>${__classPrivateFieldGet(this, _Card_cardData, "f").height}</span></p>
      </div>
      <div class="card__info-type">
        ${types}
      </div>
    `;
    }
}
_Card_cardData = new WeakMap();
