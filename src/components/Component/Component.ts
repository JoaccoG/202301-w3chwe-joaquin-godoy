import type ComponentStructure from '../../types/types.js';

export default class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className: string = 'container',
    tag: string = 'main'
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.domElement);
  }
}
