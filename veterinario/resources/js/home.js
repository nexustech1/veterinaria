    const pacientes = {
      garfield: {
        nome: "Garfield",
        raca: "SRD",
        idade: "2 anos",
        imagem: "https://i.imgur.com/1P4Avpp.png",
        descricao: [
          "Garfield é um gato amarelo com olhos verdes intensos, cheio de personalidade.",
          "Sua pelagem dourada e olhar curioso dão um ar de elegância preguiçosa.",
          "Independente, carismático e um pouco sarcástico, ele domina qualquer ambiente com charme felino."
        ],
        sintomas: [
          "Falta de apetite – não está comendo como de costume",
          "Letargia – parece mais cansado ou dormindo demais",
          "Olhos lacrimejando ou remelando",
          "Espirros ou tosse leve"
        ]
      },
      loki: {
        nome: "Loki",
        raca: "Yorkshire",
        idade: "3 anos",
        imagem: "https://i.imgur.com/nH2tZxH.png",
        descricao: [
          "Loki é um cãozinho energético e protetor.",
          "Adora correr, brincar e sempre está atento ao redor.",
          "Apesar do tamanho, se comporta como um grande guardião."
        ],
        sintomas: [
          "Coceira constante",
          "Perda de pelos na barriga",
          "Sensibilidade ao toque",
          "Febre leve"
        ]
      },
      zulu: {
        nome: "Zulu",
        raca: "Spitz Alemão",
        idade: "1 ano",
        imagem: "https://i.imgur.com/gQj0LqV.png",
        descricao: [
          "Zulu é brincalhão, sociável e ama colo.",
          "Costuma latir quando fica animado.",
          "Aprende comandos com facilidade e é muito esperto."
        ],
        sintomas: [
          "Vômito após refeições",
          "Diarreia leve",
          "Inquietação à noite"
        ]
      },
      loro: {
        nome: "Loro",
        raca: "Papagaio",
        idade: "4 anos",
        imagem: "https://i.imgur.com/VV2aJ1u.png",
        descricao: [
          "Loro é falante e adora atenção.",
          "Reproduz sons da casa e interage com visitas.",
          "Se sente sozinho quando deixado por muito tempo."
        ],
        sintomas: [
          "Perda de penas",
          "Diminuição no apetite",
          "Agressividade repentina"
        ]
      },
      nino: {
        nome: "Nino",
        raca: "Coelho Mini Lop",
        idade: "6 meses",
        imagem: "https://i.imgur.com/kN6LkFh.png",
        descricao: [
          "Nino é dócil e adora ser acariciado.",
          "Gosta de explorar e roer objetos.",
          "Precisa de cuidados com dentes e unhas regularmente."
        ],
        sintomas: [
          "Dentes crescendo tortos",
          "Pouca urina",
          "Isolamento no canto da gaiola"
        ]
      }
    };
  
    const pacienteItems = document.querySelectorAll(".paciente-item");
    const detalhesEl = document.querySelector(".paciente-detalhes");
  
    pacienteItems.forEach(item => {
      item.addEventListener("click", () => {
        const nome = item.textContent.trim().toLowerCase();
        const paciente = pacientes[nome];
  
        if (paciente) {
          detalhesEl.innerHTML = `
            <img src="${paciente.imagem}" alt="${paciente.nome}">
            <h3>Nome: ${paciente.nome}<br>
                Raça: <a href="#" class="link-raca">${paciente.raca}</a><br>
                Idade: <a href="#" class="link-idade">${paciente.idade}</a>
            </h3>
            <ul>
              ${paciente.descricao.map(linha => `<li>${linha}</li>`).join('')}
            </ul>
            <hr>
            <h4>Sintomas</h4>
            <ul>
              ${paciente.sintomas.map(s => `<li>${s}</li>`).join('')}
            </ul>
          `;
  
          setTimeout(() => {
            document.querySelector(".link-raca")?.addEventListener("click", e => {
              e.preventDefault();
              alert(`A raça de ${paciente.nome} é ${paciente.raca}`);
            });
  
            document.querySelector(".link-idade")?.addEventListener("click", e => {
              e.preventDefault();
              alert(`${paciente.nome} tem ${paciente.idade}`);
            });
          }, 0);
        }
      });
    });

    document.querySelector(".edit-btn").addEventListener("click", () => {
      const nome = prompt("Digite o nome do paciente que deseja editar:").trim().toLowerCase();
      const paciente = pacientes[nome];

      if (paciente) {
        const novosSintomas = prompt("Digite os novos sintomas separados por vírgula:", paciente.sintomas.join(", "));
        const novaDescricao = prompt("Digite a nova descrição separada por ponto-e-vírgula:", paciente.descricao.join("; "));

        if (novosSintomas) {
          paciente.sintomas = novosSintomas.split(",").map(s => s.trim());
        }

        if (novaDescricao) {
          paciente.descricao = novaDescricao.split(";").map(d => d.trim());
        }

        alert(`As informações de ${paciente.nome} foram atualizadas com sucesso!`);
      } else {
        alert("Paciente não encontrado.");
      }
    });
    
    document.querySelectorAll("header nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const text = link.textContent.trim();
        alert(`Você clicou em '${text}' — essa página ainda não está disponível.`);
      });
    });