import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.publicApi = 'htts://fernando-herrera.com'
console.log(charmander);

charmander.savePokemon(1);