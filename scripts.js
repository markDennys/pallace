document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const status = document.getElementById("status");
  const loading = document.getElementById("loading");
  const serviceID = "service_sxldawf";
  const templateID = "template_0j5ge8f";

  // Mostrar o indicador de loading
  loading.style.display = "block";
  status.textContent = ""; // Limpa a mensagem de status anterior

  emailjs.sendForm(serviceID, templateID, this).then(
      () => {
          loading.style.display = "none"; // Esconde o indicador de loading
          status.textContent = "Mensagem enviada com sucesso!";
          status.style.color = "green";
          document.getElementById("contactForm").reset();
      },
      (error) => {
          loading.style.display = "none"; // Esconde o indicador de loading
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
  var numeroTelefone = "558194622071"; // Substitua pelo número desejado, incluindo o código do país
  var mensagem = "Olá! gostaria de tirar uma dúvida.";
  var mensagemCodificada = encodeURIComponent(mensagem);
  var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;
  window.location.href = linkWhatsApp;
}

document.addEventListener('DOMContentLoaded', function() {
  const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', function(e) {
      let input = e.target.value;
      input = input.replace(/\D/g, '');

      if (input.length > 10) {
          input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
      } else if (input.length > 5) {
          input = input.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      } else if (input.length > 2) {
          input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      } else {
          input = input.replace(/^(\d*)/, '($1');
      }

      e.target.value = input;
  });
});
