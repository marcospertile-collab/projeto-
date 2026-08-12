function filtrar(categoria, evento) {
  // 1. Pega todos os cards de receitas e os botões da tela
  const cards = document.querySelectorAll('.card');
  const botoes = document.querySelectorAll('.btn-filtro');

  // 2. Tira a cor de destaque de todos os botões
  botoes.forEach(btn => btn.classList.remove('ativo'));
  
  // 3. Coloca a cor de destaque apenas no botão que você acabou de clicar
  evento.target.classList.add('ativo');

  // 4. Passa de receita em receita: se for da categoria clicada, MOSTRA; se não for, ESCONDE
  cards.forEach(card => {
    if (categoria === 'todas' || card.classList.contains(categoria)) {
      card.style.display = 'block'; // Mostra na tela
    } else {
      card.style.display = 'none';  // Esconde da tela
    }
  });
}
