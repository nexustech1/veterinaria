    const pacientes = {
      garfield: {
        nome: "Garfield",
        raca: "SRD",
        idade: "2 anos",
        imagem: "data:image/jpeg;base64,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",
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
    };
  
    const pacienteItems = document.querySelectorAll(".paciente-item");
    const detalhesEl = document.querySelector(".paciente-detalhes");

    function adicionarEventoPaciente(item, paciente) {
      item.addEventListener("click", () => {
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
            <button class="registros-btn" style="margin-top:10px;background:#1976d2;color:#fff;border:none;padding:8px 16px;border-radius:5px;cursor:pointer;">Registros</button>
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

            // Evento do botão Registros
            document.querySelector(".registros-btn")?.addEventListener("click", () => {
              // Salva os dados do paciente no localStorage
              localStorage.setItem("pacienteSelecionado", JSON.stringify(paciente));
              // Redireciona para /registros
              window.location.href = "/registros";
            });
          }, 0);
        }
      });
    }

    pacienteItems.forEach(item => {
      const nome = item.textContent.trim().toLowerCase();
      const paciente = pacientes[nome];
      adicionarEventoPaciente(item, paciente);
    });


    // Seleciona o botão "Novo Paciente" pela classe
    const novoPacienteBtn = document.querySelector('.novo-btn');

    // Adiciona um evento de clique ao botão
    novoPacienteBtn.addEventListener('click', () => {
      // Cria um formulário dinâmico para coletar as informações do paciente
      const formHtml = `
        <div id="novoPacienteForm" style="background: #f9f9f9; padding: 20px; border: 1px solid #ccc; margin: 20px 0;">
          <h3>Adicionar Novo Paciente</h3>
          <label>Nome: <input type="text" id="pacienteNome"></label><br>
          <label>Raça: <input type="text" id="pacienteRaca"></label><br>
          <label>Idade: <input type="text" id="pacienteIdade"></label><br>
          <label>Imagem (URL): <input type="text" id="pacienteImagem"></label><br>
          <label>Descrição: <textarea id="pacienteDescricao"></textarea></label><br>
          <label>Sintomas (separados por vírgula): <textarea id="pacienteSintomas"></textarea></label><br>
          <button id="salvarPacienteBtn">Salvar</button>
          <button id="cancelarPacienteBtn">Cancelar</button>
        </div>
      `;

      // Adiciona o formulário ao HTML
      const pacientesContainer = document.getElementById('pacientesContainer');
      pacientesContainer.insertAdjacentHTML('beforebegin', formHtml);

      // Adiciona funcionalidade ao botão "Salvar"
      document.getElementById('salvarPacienteBtn').addEventListener('click', () => {
        const nome = document.getElementById('pacienteNome').value.trim();
        const raca = document.getElementById('pacienteRaca').value.trim();
        const idade = document.getElementById('pacienteIdade').value.trim();
        const imagem = document.getElementById('pacienteImagem').value.trim();
        const descricao = document.getElementById('pacienteDescricao').value.split('\n').map(desc => desc.trim());
        const sintomas = document.getElementById('pacienteSintomas').value.split(',').map(sintoma => sintoma.trim());

        // Verifica se todos os campos foram preenchidos
        if (nome && raca && idade && imagem && descricao.length && sintomas.length) {
          // Adiciona o novo paciente ao objeto "pacientes"
          const pacienteKey = nome.toLowerCase();
          pacientes[pacienteKey] = {
            nome,
            raca,
            idade,
            imagem,
            descricao,
            sintomas
          };

          // Cria um novo elemento HTML para o paciente
          const pacienteItem = document.createElement('div');
          pacienteItem.classList.add('paciente-item');
          pacienteItem.innerHTML = `
            <img src="${imagem}" alt="${nome}">
            <span>${nome}</span>
            <button class="excluir-btn" data-nome="${pacienteKey}" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px; float: right;">Excluir</button>
          `;

          // Adiciona o novo paciente à lista
          const pacientesLista = document.querySelector('.paciente-lista');
          pacientesLista.appendChild(pacienteItem);

          // Adiciona o evento de clique ao novo paciente
          adicionarEventoPaciente(pacienteItem, pacientes[pacienteKey]);

          // Adiciona funcionalidade ao botão "Excluir"
          pacienteItem.querySelector('.excluir-btn').addEventListener('click', e => {
            e.stopPropagation();
            const nomePaciente = e.target.dataset.nome;
            delete pacientes[nomePaciente];
            pacienteItem.remove();
            alert(`Paciente "${nome}" foi excluído com sucesso!`);
          });

          // Remove o formulário após salvar
          document.getElementById('novoPacienteForm').remove();

          alert(`Paciente "${nome}" foi adicionado com sucesso!`);
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      });

      // Adiciona funcionalidade ao botão "Cancelar"
      document.getElementById('cancelarPacienteBtn').addEventListener('click', () => {
        // Remove o formulário sem salvar
        document.getElementById('novoPacienteForm').remove();
      });
    });
    document.querySelector(".lembrete-btn").addEventListener("click", () => {
      alert("Você clicou em '+ Lembrete'. Essa função será adicionada em breve.");
    });
    document.querySelectorAll("header nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const text = link.textContent.trim();
        alert(`Você clicou em '${text}' — essa página ainda não está disponível.`);
      });
    });