const cadastroForm = document.getElementById('cadastroForm');
const cadastrarBtn = document.getElementById('cadastrarBtn');

cadastrarBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const userData = {
    email: email,
    senha: senha
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  alert('Cadastro realizado com sucesso!');
});

document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
  
    cadastrarBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const termos = document.getElementById('termos').checked;
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }
  
      if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
      }
  
      if (!termos) {
        alert('Você deve concordar com os termos e a política de privacidade.');
        return;
      }
  
      const userData = {
        email: email,
        senha: senha
      };
  
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Cadastro realizado com sucesso!');
    });
  });
  