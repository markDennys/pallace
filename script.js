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
  var mensagem = "Olá! Gostaria de fazer um orçamento para um dia de noivo Pallace.";

  // Codifica a mensagem para que possa ser incluída no URL
  var mensagemCodificada = encodeURIComponent(mensagem);

  // Monta o link para o WhatsApp com o número de telefone e a mensagem pré-selecionada
  var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

  // Redireciona para o WhatsApp
  window.location.href = linkWhatsApp;
}