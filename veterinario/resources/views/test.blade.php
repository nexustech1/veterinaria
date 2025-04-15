<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Login</title>
</head>
<body>
    <div class="bola bola1"></div>
    <div class="bola bola2"></div>
    <div class="container">
        <div class="left">
            <img src="logo.png" alt="">
            <h1>Inscreva-se</h1>
        </div>
        <div class="right">
            <div class="form">
            <h2 class="texto1">Email</h2>
            <input type="email" class="email" id="email" placeholder="Digite seu email">
            <br>
            <h2 class="texto2">Senha</h2> 
            <input type="password" class="senha" id="senha" placeholder="Digite sua senha">
            <br><br>
            <button class="botao" onclick="validarEmail(); validarSenha();">Entrar</button>

        </div>
        </div>
    </div>
    
</body>
</html>