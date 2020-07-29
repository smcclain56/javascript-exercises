//practice retrieving information using fetch and displaying it on single page

let pokemon = prompt("Please enter the name of a pokemon");
let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

//let data = fetch(url).then(resp => resp.json());

async function getPokemon() {
  const response = await fetch(url);
  const { name, weight, moves } = await response.json();
  console.log('name',name);
  console.log('weight',weight);
  console.log('moves',moves);

}

getPokemon();
