// pra acessar a segunda aba usar /teste na url
function verificarSeguranca(senha) {
    let maiscula = /[A-Z]/;
    let numero = /[0-9]/;
    let especial = /[!@#$%&*()_+^]/;

    if (senha.length < 8) {
        return "Senha insegura, digite uma senha com no mínimo 8 caracteres";
    }
    if (!maiscula.test(senha)) {
        return "Senha insegura, digite uma senha com no mínimo uma letra maiúscula";
    }
    if (!numero.test(senha)) {
        return "Senha insegura, digite uma senha com no mínimo um número";
    }
    if (!especial.test(senha)) {
        return "Senha insegura, digite uma senha com no mínimo um caracter especial";
    }
    return "Conta criada";
}

function validarEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
        alert("O campo de e-mail não pode estar vazio.");
        return "O campo de e-mail não pode estar vazio.";
    }
    
    if (!regex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return "Por favor, insira um e-mail válido.";
    }

    return "E-mail válido!";
}

function validarSenha() {
    let senha = document.getElementById("senha").value;
    let resultadoSenha = verificarSeguranca(senha);
    let resultadoEmail = validarEmail();

    if (resultadoSenha === "Conta criada" && resultadoEmail === "E-mail válido!") {
        alert("Conta criada com sucesso!");
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
    } else {
        alert(resultadoSenha !== "Conta criada" ? resultadoSenha : resultadoEmail);
    }

    function verificarERedirecionar() {
        if (validarEmail() && validarSenha()) {
            // Redireciona para rota Laravel após a validação já feita
            window.location.href = "127.0.0.1:8000/teste";
        }
    }
}

function mostrarPaciente(nome) {
    alert(`Você clicou no paciente: ${nome}`);
    
  }