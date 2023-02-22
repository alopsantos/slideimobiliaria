const slider = document.querySelector("#slider");

fetch("data/imoveis.json")
  .then((response) => response.json())
  .then((data) => {
    processData(data);
  })
  .catch((error) => console.error(error));

async function processData(jsonData) {
  slider.innerHTML = "";
  // Use a variável 'jsonData' aqui
  await jsonData.map((imovel, i) => {
    slider.innerHTML += `
      <div class="slide${i == 0 ? " active" : ""}" key=${i}>
        <img
          src="${imovel["urlImage"]}"
          alt="" />
        <div class="info">
          <h2>${imovel["codigo"]} - ${imovel["nome"]}</h2>
          <p>1 2</p>
        </div>
      </div>
    `;
  });
}
