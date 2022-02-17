const json_file = JSON.parse(file);

console.log(json_file.results);

function buscar_personaje(nombre) {
  for (let i = 0; i < json_file.results.length; i++) {
    if (json_file.results[i].name == nombre) {
      return json_file.results[i];
    }
  }
}

function hacer_busqueda() {
  let nombre = document.getElementById("nombre_personaje").value;
  let personaje = buscar_personaje(nombre);

  let html = `<div>Nombre: ${personaje.name}</div><div>Color de pelo: ${personaje.hair_color}</div><div>Genero: ${personaje.gender}</div>`;

  document.getElementById("resultado").innerHTML = html;
}

let result = JSON.parse(poke_file);

console.log(result);
