// Função para filtrar as receitas por categoria
function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');
  const botoes = document.querySelectorAll('.filter-btn');

  // Atualizar classe ativa nos botões
  botoes.forEach(btn => {
    btn.classList.remove('active');
  });
  
  event.target.classList.add('active');

  // Filtrar os cards com animação simples
  cards.forEach(card => {
    if (categoria === 'todas') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(categoria)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
