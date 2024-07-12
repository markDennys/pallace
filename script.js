const mtObserve = new IntersectionObserver((entr) => {
  entr.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add("show");
    }
  });
});

const elems = document.querySelectorAll(".parag");

elems.forEach((element) => mtObserve.observe(element));

const mtObserve2 = new IntersectionObserver((entr) => {
  entr.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add("show");
    } else {
      ent.target.classList.remove("show");
    }
  });
});

const elems2 = document.querySelectorAll(".ani");
const elems3 = document.querySelectorAll(".anit");
const elems4 = document.querySelectorAll(".anim");
const elems5 = document.querySelectorAll(".avec");

elems2.forEach((element) => mtObserve2.observe(element));

elems3.forEach((element) => mtObserve2.observe(element));

elems4.forEach((element) => mtObserve2.observe(element));

function enviarMensagemWhatsApp() {
  // Número de telefone para o qual você deseja enviar a mensagem
  var numeroTelefone = "558194622071"; // Substitua pelo número desejado, incluindo o código do país

  // Mensagem pré-selecionada
  var mensagem =
    "Olá! Gostaria de fazer um orçamento para um dia de noivo Pallace.";

  // Codifica a mensagem para que possa ser incluída no URL
  var mensagemCodificada = encodeURIComponent(mensagem);

  // Monta o link para o WhatsApp com o número de telefone e a mensagem pré-selecionada
  var linkWhatsApp =
    "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

  // Redireciona para o WhatsApp
  window.location.href = linkWhatsApp;
}

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Function to show the next item
  function showNextItem() {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });

  // Automatically change items every 3 seconds
  setInterval(showNextItem, 5000);
});

document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("change", function () {
    document.body.classList.toggle("blue");
  });
});

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-16550047262/hKkXCOeQ6qsZEJ7c1tM9",
    event_callback: callback,
  });
  return false;
}

function call() {
  console.log("aqui")
  gtag_report_conversion();
  enviarMensagemWhatsApps();
}


function enviarMensagemWhatsApps() {
  // Número de telefone para o qual você deseja enviar a mensagem
  var numeroTelefone = "558194622071"; // Substitua pelo número desejado, incluindo o código do país

  // Mensagem pré-selecionada
  var mensagem = "Olá! gostaria de tirar uma dúvida.";

  // Codifica a mensagem para que possa ser incluída no URL
  var mensagemCodificada = encodeURIComponent(mensagem);

  // Monta o link para o WhatsApp com o número de telefone e a mensagem pré-selecionada
  var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

  // Redireciona para o WhatsApp
  window.location.href = linkWhatsApp;
}



function redirecionarParaOutroSite1(site) {
  var url = 'https://www.instagram.com/aromasvinhos';
  window.open(url, '_blank');
}

function redirecionarParaOutroSite12(site) {
  var url = 'https://www.instagram.com/_carros96/';
  window.open(url, '_blank');
}


function redirecionarParaOutroSite2(site) {
  var url = 'https://www.instagram.com/deluxejoiasrecife/';
  window.open(url, '_blank');
}


function redirecionarParaOutroSite3(site) {
  var url = 'https://www.instagram.com/viaoculosprime/';
  window.open(url, '_blank');
}


function redirecionarParaOutroSite4(site) {
  var url = 'https://www.instagram.com/dra.reginabezerra/';
  window.open(url, '_blank');
}




function redirecionarParaWhatsApp1() {
  // Número de telefone (inclua o código do país, por exemplo +55 para Brasil)
  var numeroTelefone = '+5581994714221';  // Substitua pelo número desejado
  // Montar o link do WhatsApp com o número de telefone
  var url = 'https://wa.me/' + numeroTelefone;

  // Abrir o link no WhatsApp em uma nova aba
  window.open(url, '_blank');
}
function redirecionarParaWhatsApp2() {
  // Número de telefone (inclua o código do país, por exemplo +55 para Brasil)
  var numeroTelefone = '+5581983336180';  // Substitua pelo número desejado
  // Montar o link do WhatsApp com o número de telefone
  var url = 'https://wa.me/' + numeroTelefone;

  // Abrir o link no WhatsApp em uma nova aba
  window.open(url, '_blank');
}
function redirecionarParaWhatsApp3() {
  // Número de telefone (inclua o código do país, por exemplo +55 para Brasil)
  var numeroTelefone = '+5581971048450';  // Substitua pelo número desejado
  // Montar o link do WhatsApp com o número de telefone
  var url = 'https://wa.me/' + numeroTelefone;

  // Abrir o link no WhatsApp em uma nova aba
  window.open(url, '_blank');
}
function redirecionarParaWhatsApp4() {
  // Número de telefone (inclua o código do país, por exemplo +55 para Brasil)
  var numeroTelefone = '+5581998885881';  // Substitua pelo número desejado
  // Montar o link do WhatsApp com o número de telefone
  var url = 'https://wa.me/' + numeroTelefone;

  // Abrir o link no WhatsApp em uma nova aba
  window.open(url, '_blank');
}



function redirecionarParaWhatsApp41() {
  // Número de telefone (inclua o código do país, por exemplo +55 para Brasil)
  var numeroTelefone = '+558197501082';  // Substitua pelo número desejado
  // Montar o link do WhatsApp com o número de telefone
  var url = 'https://wa.me/' + numeroTelefone;

  // Abrir o link no WhatsApp em uma nova aba
  window.open(url, '_blank');
}