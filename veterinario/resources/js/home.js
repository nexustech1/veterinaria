document.addEventListener('DOMContentLoaded', () => {
  const pacientes = {
      garfield: {
          nome: "Garfield",
          raca: "SRD",
          idade: "2 anos",
          imagem: "https://i.pinimg.com/736x/d0/ef/59/d0ef59067de4e26bcf64fca2f7b8bc00.jpg",
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
          ],
          responsavel: {
              nome: "Bianca Elisabeth",
              contato: "1299109-1276",
              email: "elisabethbianca23@gmail.com",
              telefone: "3145-0987",
              imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK3V6COtYwQOdNVNWsLRx1I7-QXZoMpEGcw&s"
          }
      },
      loki: {
          nome: "Loki",
          raca: "Yorkshire Terrier",
          idade: "4 anos",
          imagem: "https://i.pinimg.com/736x/a1/e8/bd/a1e8bd916367b559284d32312bbb51be.jpg",
          descricao: ["Loki é um Yorkshire Terrier, pequeno, ativo e muito carinhoso."],
          sintomas: ["Tosse leve", "Vômito ocasional"],
          responsavel: {
              nome: "Thor Odinson",
              contato: "1299101-1276",
              email: "thor.o@example.com",
              telefone: "987654321",
              imagem: "https://i.pinimg.com/736x/d7/b6/a3/d7b6a3a3e5aedde95151464d14da144e.jpg"
          }
      },
      zulu: {
          nome: "Zulu",
          raca: "Pomeranian",
          idade: "1 ano",
          imagem: "https://i.pinimg.com/736x/49/83/95/4983956d744c6914916e57f787d960d5.jpg",
          descricao: ["Zulu é um Pomeranian adorável, cheio de energia e muito brincalhão."],
          sintomas: ["Nenhum sintoma relatado", "Vacinação em dia"],
          responsavel: {
              nome: "Nala Simbana",
              contato: "1599101-1446",
              email: "nala.s@example.com",
              telefone: "123456789",
              imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qQF2KCMn63HXMRndqnU7MPImsBtsTHZCXA&s"
          }
      },
      loro: {
          nome: "Loro",
          raca: "Calopsita",
          idade: "3 anos",
          imagem: "https://i.pinimg.com/736x/14/bb/b2/14bbb2f605e27df0f8281541bce6d369.jpg",
          descricao: ["Loro é uma calopsita falante e muito sociável."],
          sintomas: ["Pena opaca", "Canto irregular"],
          responsavel: {
              nome: "Aristeu Alves",
              contato: "1199922-3344",
              email: "Aristeu.a@example.com",
              telefone: "55667788",
              imagem: "https://i.pinimg.com/736x/af/ba/d3/afbad3687eec53781b9b742e0ff7a76e.jpg"
          }
      },
  };

  const pacienteItems = document.querySelectorAll(".paciente-item");
  const detalhesEl = document.getElementById("pacienteDetalhes");

  function adicionarEventoPaciente(itemElement, pacienteData) {
      itemElement.addEventListener("click", () => {
          pacienteItems.forEach(i => i.classList.remove('active'));
          itemElement.classList.add('active');

          if (pacienteData) {
              detalhesEl.innerHTML = `
                  <img src="${pacienteData.imagem}" alt="${pacienteData.nome}" class="profile-pic">
                  <h3>Nome: ${pacienteData.nome}<br>
                      Raça: <a href="#" class="link-raca">${pacienteData.raca}</a><br>
                      Idade: <a href="#" class="link-idade">${pacienteData.idade}</a>
                  </h3>
                  <ul>
                      ${pacienteData.descricao.map(linha => `<li>${linha}</li>`).join('')}
                  </ul>
                  <hr>
                  <h4>Sintomas</h4>
                  <ul>
                      ${pacienteData.sintomas.map(s => `<li>${s}</li>`).join('')}
                  </ul>
                  <button class="registros-btn">Registros</button>
                  ${pacienteData.responsavel ? `
                      <div class="section-title">Responsável</div>
                      <img src="${pacienteData.responsavel.imagem}" alt="${pacienteData.responsavel.nome}" class="responsavel-pic">
                      <h3>Nome: ${pacienteData.responsavel.nome}</h3>
                      <p>Contato: ${pacienteData.responsavel.contato}</p>
                      <p>E-mail: ${pacienteData.responsavel.email}</p>
                      <p>Telefone: ${pacienteData.responsavel.telefone}</p>
                  ` : ''}
              `;

              setTimeout(() => {
                  document.querySelector(".link-raca")?.addEventListener("click", e => {
                      e.preventDefault();
                      alert(`A raça de ${pacienteData.nome} é ${pacienteData.raca}`);
                  });

                  document.querySelector(".link-idade")?.addEventListener("click", e => {
                      e.preventDefault();
                      alert(`${pacienteData.nome} tem ${pacienteData.idade}`);
                  });

                  document.querySelector(".registros-btn")?.addEventListener("click", () => {
                      localStorage.setItem("pacienteSelecionado", JSON.stringify(pacienteData));
                      window.location.href = "/registros";
                  });
              }, 0);
          }
      });
  }

  pacienteItems.forEach(item => {
      const patientKey = item.dataset.patientKey;
      const paciente = pacientes[patientKey];
      if (paciente) {
          adicionarEventoPaciente(item, paciente);
      }
  });

  const garfieldItem = document.querySelector('.paciente-item[data-patient-key="garfield"]');
  if (garfieldItem) {
      garfieldItem.click();
  }

  document.querySelector(".edit-btn").addEventListener("click", () => {
      alert("Você clicou em 'Editar Paciente'. Essa função será adicionada em breve.");
  });

  document.querySelectorAll("header nav a").forEach(link => {
      link.addEventListener("click", e => {
          e.preventDefault();
          const text = link.textContent.trim();
          alert(`Você clicou em '${text}' — essa página ainda não está disponível.`);
      });
  });

  document.querySelector(".search-icon").addEventListener("click", () => {
      alert("A função de busca ainda não está disponível.");
  });
});