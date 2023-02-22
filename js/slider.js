var slides;
var btns;
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
          src="${imovel["urlImage"]}"
          alt="" />
        <div class="info">
          <h2>${imovel["codigo"]} - ${imovel["nome"]} ${imovel["tamanho"]}</h2>
          <ul>
            <li class="${imovel["quarto"] > 0 ? "" : "remover"}">
              <span>${imovel["quarto"]}</span>
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
            <li class="${imovel["banheiro"] > 0 ? "" : "remover"}">
              <span>${imovel["banheiro"]}</span>
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
  btns = document.querySelectorAll(".btn");
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
    });
  });
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
