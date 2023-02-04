interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}
export default ComponentStructure;

export interface PokemonsList {
  id: number;
}
