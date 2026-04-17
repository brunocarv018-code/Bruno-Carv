const projetos = [
    {
        titulo: "Projeto 1",
        descricao: "Descrição breve do que foi feito nesse projeto.",
        tecnologias: "HTML, CSS, JS",
        link: "https://github.com/seuusuario/projeto1"
    },
    {
        titulo: "Projeto 2", 
        descricao: "Outro projeto importante para seu portfólio.",
        tecnologias: "React, Node.js",
        link: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Projeto 3",
        descricao: "Mais um projeto para mostrar suas habilidades.",
        tecnologias: "Python, Flask",
        link: "https://github.com/seuusuario/projeto3"
    }
];

function renderizarProjetos() {
    const container = document.getElementById('lista-projetos');
    
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card-projeto';
        
        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
            <a href="${projeto.link}" target="_blank">Ver projeto</a>
        `;
        
        container.appendChild(card);
    });
}

// Executa quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarProjetos);