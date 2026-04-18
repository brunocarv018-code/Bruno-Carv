const projetos = [
    {
        titulo: "Projeto I",
        descricao: "Descrição breve do que foi feito nesse projeto.",
        tecnologias: "HTML, CSS, JS",
        link: "#"
    },
    {
        titulo: "Projeto I", 
        descricao: "Outro projeto importante para seu portfólio.",
        tecnologias: "React, Node.js",
        link: "#"
    },
    {
        titulo: "Projeto III",
        descricao: "Mais um projeto para mostrar suas habilidades.",
        tecnologias: "Python, Flask",
        link: "#"
    }
];

function renderizarProjetos() {
    const container = document.getElementById('lista-projetos');
    container.innerHTML = ''; // Limpa pra não duplicar
    
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card-projeto';
        
        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
            <button onclick="alert('Em breve!'); window.scrollTo(0, 0);">Ver projeto</button>
        `;
        
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);
