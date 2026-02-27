// INICIALIZAÇÃO EMAILJS
emailjs.init("EVzeax0Fu7LjCk4b1");

const form  = document.getElementById('nlForm');
const input = document.getElementById('nlEmail');
const msg   = document.getElementById('nlMsg');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = input.value.trim();

  if (!email) {
    input.classList.add('erro');
    msg.className   = 'wc-rodape__nl-msg erro';
    msg.textContent = 'Insira seu e-mail para continuar.';
    input.focus();
    return;
  }

  if (!regex.test(email)) {
    input.classList.add('erro');
    msg.className   = 'wc-rodape__nl-msg erro';
    msg.textContent = 'E-mail inválido. Verifique e tente novamente.';
    input.focus();
    return;
  }

  // Estado carregando
  msg.className   = 'wc-rodape__nl-msg';
  msg.textContent = 'Enviando...';

  emailjs.send("service_iduqryt", "template_6timt8t", {
    user_email: email
  })
  .then(function() {
    msg.className   = 'wc-rodape__nl-msg ok';
    msg.textContent = 'Inscrição realizada com sucesso!';
    input.value = '';
  })
  .catch(function(error) {
    msg.className   = 'wc-rodape__nl-msg erro';
    msg.textContent = 'Erro ao enviar. Tente novamente.';
    console.error(error);
  });
});

input.addEventListener('input', function() {
  this.classList.remove('erro');
  if (msg.classList.contains('erro')) msg.textContent = '';
});