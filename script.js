const projetos = [
    {
        titulo: "Projeto I",
        descricao: "Descrição breve do que foi feito nesse projeto.",
        tecnologias: "HTML, CSS, JS"
    },
    {
        titulo: "Projeto II", 
        descricao: "Outro projeto importante para seu portfólio.",
        tecnologias: "React, Node.js"
    },
    {
        titulo: "Projeto III",
        descricao: "Mais um projeto para mostrar suas habilidades.",
        tecnologias: "Python, Flask"
    }
];

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
            alert('Em breve!');
            window.scrollTo(0, 0);
        };
        
        card.appendChild(h3);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(botao);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);
