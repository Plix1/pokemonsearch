const url = "https://pokeapi.co/api/v2/pokemon";
const search = document.querySelector("#search");
const PokemonDiv = document.querySelector(".DisplayPokemon");
const suggestions = document.querySelector(".suggestions");

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayPoke() {
  const keyword = this.value;
  const regex = new RegExp(keyword.toLowerCase());
  fetch(`https://pokeapi.co/api/v2/pokemon${regex}`)
    .then((blob) => blob.json())
    .then((data) => {
      PokemonDiv.innerHTML = `
      <div class="details">
      <div class="details_img">
        <img
          src=${data.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <div class="details_desc">
        <div class="pokemon_name">
          <h2>${capitalise(data.name)}</h2>
        </div>
        <div class="abilities">
          <div>
          <p>Ability: ${data.abilities[0].ability.name}</p>
          <p>Ability: ${data.abilities[1].ability.name}</p>
          </div>
          <p>${capitalise(data.stats[0].stat.name)}: ${
        data.stats[0].base_stat
      }</p>
          <p>${capitalise(data.stats[1].stat.name)}: ${
        data.stats[1].base_stat
      }</p>
          <p>${capitalise(data.stats[2].stat.name)}: ${
        data.stats[2].base_stat
      }</p>
          <p>${capitalise(data.stats[3].stat.name)}: ${
        data.stats[3].base_stat
      }</p>
          <p>${capitalise(data.stats[4].stat.name)}: ${
        data.stats[4].base_stat
      }</p>
          <p>${capitalise(data.stats[5].stat.name)}: ${
        data.stats[5].base_stat
      }</p>
         
          
          <p>Type: ${data.types[0].type.name}</p>
        </div>
      </div>
    </div>
      `;
    })
    .catch(
      (err) =>
        (PokemonDiv.innerHTML = `
    <div class="details">
     <h2>No Pokemon Found<br>
     <div class="pokeball_img">
     <img
       src="images/pokeball.png"
       alt=""
     />
   </div>
     
  </div>`)
    );
}

// search.addEventListener("keyup", displayPoke);
search.addEventListener("change", displayPoke);
