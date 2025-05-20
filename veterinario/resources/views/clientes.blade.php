<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pet+VET</title>
  <!-- <link rel="stylesheet" href="contato.css"> -->
  @vite(['resources/css/app.css'])
</head>
<body>
  <header>
    <div class="logo">🐶 Pet+<strong>VET</strong></div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Serviços</a>
      <a href="#">Sobre</a>
      <a href="#">Contato</a>
      <input type="search" placeholder="🔍">
    </nav>
  </header>

  <main>
    <section class="sidebar">
      <a href="{{ route('clientes.create') }}" id="novoPaciente">+ Novo Paciente</a>
      <ul id="lista-pacientes">
        @foreach($clientes as $cliente)
        <li onclick="mostrarPaciente('{{ $cliente->nome }}')">
          <img src="" alt="{{ $cliente->nome }}">
          <span>{{ $cliente->nome }}</span>
        </li>
        @endforeach
        <!-- <li onclick="mostrarPaciente('Loki')">
          <img src="" alt="Loki">
          <span>Loki</span>
        </li>
        <li onclick="mostrarPaciente('Zulu')">
          <img src="" alt="Zulu">
          <span>Zulu</span>
        </li>
        <li onclick="mostrarPaciente('Loro')">
          <img src="" alt="Loro">
          <span>Loro</span>
        </li> -->
      </ul>
    </section>

    <section class="detalhes">
      <h2>Contato</h2>
      <div class="paciente-info">
        <div class="animal">
          <img src="" alt="Garfield">
          <p><strong>Nome:</strong> Garfield<br>
             <strong>Raça:</strong> SRD<br>
             <strong>Idade:</strong> 2 Anos</p>
        </div>
        <div class="responsavel">
          <div class="titulo">Responsável</div>
          <img src="" alt="Bianca">
          <p><strong>Nome:</strong> Bianca Elisabeth<br>
             <strong>Idade:</strong> 23<br>
             <strong>Contato:</strong> 1299109-1276<br>
             <strong>Telefone:</strong> 3145-0987</p>
        </div>
      </div>
    </section>
  </main>

  <!-- <script src="contato.js"></script> -->
  @vite(['resources/js/app.js'])
</body>
</html>