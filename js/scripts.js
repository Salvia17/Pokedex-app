let pokemonList = [
{
  name: 'Slowpoke',
  height: 1.2,
  types: ['Psychic', 'Water']
},
{
  name: 'Jigglypuff',
  height: 0.5,
  types: ['Fairy', 'Normal']
},
{
  name: 'Psyduck',
  height: 0.8,
  types: ['Water']
},
{
  name: 'Starmie',
  height: 1.1,
  types: ['Psychic', 'Water']
},
{
  name: 'Charizard',
  height: 1.7,
  types: ['Fire', 'Flying']
},
];

for (let i=0; i < pokemonList.length; i++){
  document.write (pokemonList[i].name, ' ' + '(', pokemonList[i].height, ')');
  if (pokemonList[i].height > 1.3){
    document.write (' WOW! That\'s big!')
  }
}
