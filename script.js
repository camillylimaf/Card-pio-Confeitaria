const cardapio = [
    {
      nome: "Bolo de Morango",
      preco: "R$ 12,00",
      categoria: "bolos",
      imagem: "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-bolo-morango-chantilly.jpg?quality=70&strip=info&crop=1&resize=1080,565"
    },
    {
      nome: "Donut de Chocolate",
      preco: "R$ 7,00",
      categoria: "doces",
      imagem: "https://harald.com.br/wp-content/uploads/2020/07/donuts-720x500-1.jpg"
    },
    {
      nome: "Café com Leite",
      preco: "R$ 6,00",
      categoria: "bebidas",
      imagem: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
    },
    {
      nome: "Cupcake de Baunilha",
      preco: "R$ 5,00",
      categoria: "doces",
      imagem: "https://renata.com.br/images/receitas/221/renata-imagem-receitas-cupcake-de-baunilha-share.jpg"
    },
    {
      nome: "Bolo de Cenoura",
      preco: "R$ 10,00",
      categoria: "bolos",
      imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2018/04/bolo_vulcao.jpg"
    },
    {
      nome: "Chocolate Quente",
      preco: "R$ 8,00",
      categoria: "bebidas",
      imagem: "https://static.itdg.com.br/images/1200-630/afa6145892c1523fde9d4f8c956778db/chocolate-quente-cremoso-e-facil.jpg"
    }
  ];
  
  const container = document.querySelector('.cardapio');
  const botoes = document.querySelectorAll('.filtros button');
  
  function mostrarItens(lista) {
    container.innerHTML = '';
    lista.forEach(item => {
      container.innerHTML += `
        <div class="item">
          <img src="${item.imagem}" alt="${item.nome}">
          <h3>${item.nome}</h3>
          <p>${item.preco}</p>
        </div>
      `;
    });
  }
  
  mostrarItens(cardapio);
  
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const categoria = btn.getAttribute('data-categoria');
  
      botoes.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
  
      if (categoria === 'todos') {
        mostrarItens(cardapio);
      } else {
        const filtrados = cardapio.filter(item => item.categoria === categoria);
        mostrarItens(filtrados);
      }
    });
  });
  
