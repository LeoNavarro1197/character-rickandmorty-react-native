function getProducts() {
  const URL = "https://rickandmortyapi.com/api/character";
  return fetch(URL)
    .then((response) => response.json()) // la respuesta la transformamos a json
    .then((data) => {
      console.log(data);
      return data.results; // asumiendo que data es en results
    })
    .catch((error) => {
      console.error(error);
    });
}

function getProduct(id) {
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

export { getProducts, getProduct };

export default function Api() {
  return null;
}
