document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const status = document.getElementById("status");
    const serviceID = "service_sxldawf";
    const templateID = "template_0j5ge8f";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "green";
        document.getElementById("contactForm").reset();
      },
      (error) => {
        status.textContent = "Erro ao enviar mensagem.";
        status.style.color = "red";
        console.log("Erro:", error);
      }
    );
  });

function call() {
  console.log("aqui");
  gtag_report_conversion();
  enviarMensagemWhatsApps();
}

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

function enviarMensagemWhatsApps() {
  // Número de telefone para o qual você deseja enviar a mensagem
  var numeroTelefone = "558194622071"; // Substitua pelo número desejado, incluindo o código do país

  // Mensagem pré-selecionada
  var mensagem = "Olá! gostaria de tirar uma dúvida.";

  // Codifica a mensagem para que possa ser incluída no URL
  var mensagemCodificada = encodeURIComponent(mensagem);

  // Monta o link para o WhatsApp com o número de telefone e a mensagem pré-selecionada
  var linkWhatsApp =
    "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

  // Redireciona para o WhatsApp
  window.location.href = linkWhatsApp;
}
