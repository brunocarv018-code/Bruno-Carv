const projetos = [
    {
        titulo: "Projeto I",
        descricao: "Construção do MVP (Produto Mínimo Viável)",
        tecnologias: "HTML, CSS, JS"
    },
    {
        titulo: "Projeto II", 
        descricao: "Migração com React.",
        tecnologias: "React, Node.js"
    },
    {
        titulo: "Projeto III",
        descricao: "Mais um projeto para mostrar minhas habilidades.",
        tecnologias: "Python, Flask"
    }
];

// CONTROLE DOS MODAIS
function abrirModal(idModal) {
    document.getElementById(idModal).style.display = 'block';
    window.scrollTo(0, 0);
}

function fecharModal(idModal) {
    document.getElementById(idModal).style.display = 'none';
}

// Fecha clicando no X
document.querySelectorAll('.fechar').forEach(span => {
    span.onclick = function() {
        const idModal = this.getAttribute('data-modal');
        fecharModal(idModal);
    }
});

// Fecha clicando fora do modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// BOTÕES DO MENU
document.getElementById('btn-me-conheca').onclick = function(e) {
    e.preventDefault();
    abrirModal('modal-sobre');
};

document.getElementById('btn-apoio').onclick = function(e) {
    e.preventDefault();
    abrirModal('modal-apoio');
};

// RENDERIZA OS PROJETOS
function renderizarProjetos() {
    const container = document.getElementById('lista-projetos');
    container.innerHTML = '';
    
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card-projeto';
        
        const h3 = document.createElement('h3');
        h3.innerText = projeto.titulo;
        
        const p1 = document.createElement('p');
        p1.innerText = projeto.descricao;
        
        const p2 = document.createElement('p');
        p2.innerHTML = '<strong>Tecnologias:</strong> ' + projeto.tecnologias;
        
        const botao = document.createElement('button');
        botao.innerText = 'Ver projeto';
        botao.onclick = function() {
            abrirModal('modal-projeto');
        };
        
        card.appendChild(h3);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(botao);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);
