// 1. MENU MOBILE (RESPONSIVO)
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Fechar menu ao clicar num link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// 2. FILTRO DE RECEITAS
const filterButtons = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.card-recipe');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Atualizar classe ativa do botão
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    recipeCards.forEach(card => {
      if (filter === 'todas' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

// 3. CALCULADORA DE IMC INTERATIVA
const btnCalcular = document.getElementById('btn-calcular');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const resultBox = document.getElementById('resultado-imc');
const imcValor = document.getElementById('imc-valor');
const imcClassificacao = document.getElementById('imc-classificacao');

btnCalcular.addEventListener('click', () => {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    alert('Por favor, digite valores válidos para peso e altura.');
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(1);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso ideal';
  } else if (imc < 24.9) {
    classificacao = 'Peso Normal (Saudável)';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade Grau I';
  } else {
    classificacao = 'Obesidade Grau II ou Severa';
  }

  imcValor.innerText = imc;
  imcClassificacao.innerText = classificacao;
  resultBox.classList.remove('hidden');
});
