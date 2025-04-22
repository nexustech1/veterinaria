document.addEventListener("DOMContentLoaded", function() {
    const paciente = JSON.parse(localStorage.getItem("pacienteSelecionado"));

    if (paciente) {
        // Preenche os campos de texto
        document.getElementById("nome").value = paciente.nome || "";
        document.getElementById("idade").value = paciente.idade || "";
        document.getElementById("peso").value = paciente.peso || "";
        document.getElementById("altura").value = paciente.altura || "";
        document.getElementById("especie").value = paciente.especie || "";
        document.getElementById("numero_chip").value = paciente.numero_chip || "";
        document.getElementById("sexo").value = paciente.sexo || "";
        document.getElementById("raca").value = paciente.raca || "";
        document.querySelector(".sintomas textarea").value = paciente.sintomas ? paciente.sintomas.join("\n") : "";
        document.querySelector(".prescricao-area textarea").value = paciente.prescricao || "";

        // Preenche os radio buttons para "Castrado"
        if (paciente.castrado === "sim") {
            document.getElementById("castrado_sim").checked = true;
        } else if (paciente.castrado === "nao") {
            document.getElementById("castrado_nao").checked = true;
        }

        // Preenche os radio buttons para "Medicações em uso"
        if (paciente.medicacao === "sim") {
            document.getElementById("medicacao_sim").checked = true;
        } else if (paciente.medicacao === "nao") {
            document.getElementById("medicacao_nao").checked = true;
        }
    }
});

function salvarClone(clone) {
    // Remove o botão antes de salvar para não enviar o botão junto
    const btn = clone.querySelector('.salvar-clone-btn');
    if (btn) btn.remove();

    // Coleta os dados do clone editado (você precisará adaptar isso)
    const formData = {};
    const inputs = clone.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
        formData[input.id || input.name] = input.value;
    });
    const radioButtons = clone.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach(radio => {
        formData[radio.name] = radio.value;
    });

    fetch('/salvar-clone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: JSON.stringify(formData) // Envia os dados do formulário
    })
    .then(response => response.json())
    .then(data => {
        alert('Alterações salvas com sucesso!');
    })
    .catch(error => {
        alert('Erro ao salvar alterações.');
    });
}

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('salvar-clone-btn')) {
        const clone = e.target.closest('.cadastro-container'); // Alterado para .cadastro-container
        if (clone) {
            salvarClone(clone);
        }
    }
});

let currentClone = null;

document.getElementById('clonarComandaBtn').addEventListener('click', function() {
    const cadastroContainer = document.querySelector('.cadastro-container');
    if (cadastroContainer) {
        const clone = cadastroContainer.cloneNode(true);
        clone.querySelectorAll('input, textarea').forEach(el => el.removeAttribute('readonly'));
        clone.querySelectorAll('input[type="radio"]').forEach(el => el.disabled = false);
        clone.style.border = "2px dashed #007bff";
        clone.style.marginTop = "20px";
        clone.classList.add('clone-editando');
        cadastroContainer.parentNode.insertBefore(clone, cadastroContainer.nextSibling); // Insere após o original
        clone.focus();
        currentClone = clone;

        // Exibe o botão de salvar fixo
        let btn = document.getElementById('salvarCloneBtnFixo');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'salvarCloneBtnFixo';
            btn.textContent = 'Salvar Alterações';
            btn.className = 'salvar-clone-btn';
            btn.style.position = 'fixed';
            btn.style.bottom = '70px';
            btn.style.right = '20px';
            btn.style.padding = '10px 20px';
            btn.style.fontSize = '16px';
            document.body.appendChild(btn);
        }
        btn.style.display = 'block';
    }
});

// Evento para salvar quando clicar no botão fixo
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'salvarCloneBtnFixo') {
        if (currentClone) {
            salvarClone(currentClone);
            // Opcional: esconder o botão após salvar
            e.target.style.display = 'none';
            currentClone = null;
        }
    }
});

// Salvar todos os dados do formulário principal ao clicar no botão com id "save-button"
document.getElementById('save-button').addEventListener('click', function() {
    const cadastroContainer = document.querySelector('.cadastro-container');
    if (cadastroContainer) {
        salvarClone(cadastroContainer);
    }
});

