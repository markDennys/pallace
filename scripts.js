document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('status');
    const serviceID = 'service_sxldawf';
    const templateID = 'template_0j5ge8f';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            status.textContent = 'Mensagem enviada com sucesso!';
            status.style.color = 'green';
            document.getElementById('contactForm').reset();
        }, (error) => {
            status.textContent = 'Erro ao enviar mensagem.';
            status.style.color = 'red';
            console.log('Erro:', error);
        });
});
