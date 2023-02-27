var slides;
let currentSlide = 1;

const slider = document.querySelector("#slider");

fetch("data/imoveis.json")
  .then((response) => response.json())
  .then((data) => {
    processData(data);
  })
  .catch((error) => console.error(error));

function processData(jsonData) {
  // slider.innerHTML = "";
  // Use a variável 'jsonData' aqui
  jsonData.map((imovel, i) => {
    slider.innerHTML += `
    <div class="slide${i == 0 ? " active" : ""}" key=${i}>
        <img
          src="assets/images/${
            imovel["codigo"] + ".jpg"
          }"
          alt="" />
        <div class="info">
          <h2>${imovel["codigo"]} - ${categoryId(imovel["category_id"])} ${
      imovel["lote"] ? " - " + imovel["lote"] + " M²" : ""
    }</h2>
          <p class="${imovel["seo_title"] ? "" : "remover"}">
              ${imovel["descricao"].substring(0, 80)}
            </p>
          <ul>
            
            <li class="${imovel["dormitorios"] > 0 ? "" : "remover"}">
              <span>${imovel["dormitorios"]}</span>
              <img class="icone" src="/assets/icones/bibed.svg" alt="" />
            </li>            
            <li class="${imovel["suite"] > 0 ? "" : "remover"}">
              <span>${imovel["suite"]}</span>
              <img class="icone" src="/assets/icones/bibath.svg" alt="" />
            </li> 
            <li class="${imovel["sala"] > 0 ? "" : "remover"}">
              <span>${imovel["sala"]}</span>
              <img class="icone" src="/assets/icones/gisofa.svg" alt="" />
            </li> 
            <li class="${imovel["cozinha"] > 0 ? "" : "remover"}">
              <span>${imovel["cozinha"]}</span>
              <img class="icone" src="/assets/icones/tbtoolskitchen.svg" alt="" />
            </li> 
            <li class="${imovel["banheiros"] > 0 ? "" : "remover"}">
              <span>${imovel["banheiros"]}</span>
              <img class="icone" src="/assets/icones/farestroom.svg" alt="" />
            </li> 
            <li class="${imovel["garagem"] > 0 ? "" : "remover"}">
              <span>${imovel["garagem"]}</span>
              <img class="icone" src="/assets/icones/bicar.svg" alt="" />
            </li> 
            <li class="${imovel["edicula"] > 0 ? "" : "remover"}">
              <span>${imovel["edicula"]}</span>
              <img class="icone" src="/assets/icones/aifillfire.svg" alt="" />
            </li> 
            <li class="${imovel["lavanderia"] > 0 ? "" : "remover"}">
              <span>${imovel["lavanderia"]}</span>
              <img class="icone" src="/assets/icones/mdlocallaundryservice.svg" alt="" />
            </li> 
          </ul>
        </div>
      </div>
    `;
  });
  slides = document.querySelectorAll(".slide");
}

function categoryId(id) {
  switch (id) {
    case 1:
      return "Apartamento";
      break;
    case 2:
      return "Casa";
      break;
    case 3:
      return "Chacara";
      break;
    case 4:
      return "Barracao";
      break;
    case 5:
      return "Sala Comercial";
      break;
    case 6:
      return "Área de Terra";
      break;
    case 7:
      return "Kitinet";
      break;
    case 8:
      return "Prédio";
      break;
    case 9:
      return "Sobrado";
      break;
    case 10:
      return "Terreno";
      break;
    default:
      return "";
  }
}

// var manualNav = function (manual) {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");

//     btns.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//   });
//   slides[manual].classList.add("active");
//   btns[manual].classList.add("active");
// };

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};

repeat();
