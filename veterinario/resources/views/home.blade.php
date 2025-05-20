<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pet+ VET</title>
  @vite(['resources/css/home.css', 'resources/js/home.js'])
</head>
<body>
  <header>
    <div class="logo">🐾 Pet+ VET</div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Serviços</a>
      <a href="#">Sobre</a>
      <a href="#">Contato</a>
      <i class="fas fa-search search-icon"></i> </nav>
  </header>

  <div class="contato-section">
    Contato
  </div>

  <div class="main-container">
    <aside class="sidebar">
      <a href="{{ route('novopaciente') }}" class="button"><button class="novo-btn">+ Novo Paciente</button></a>
      <button class="edit-btn">Editar Paciente</button>

      <div class="paciente-lista">
        <div class="paciente-item active" data-patient-key="garfield">
          <img src="https://i.pinimg.com/736x/d0/ef/59/d0ef59067de4e26bcf64fca2f7b8bc00.jpg" alt="Garfield">
          <span>Garfield</span>
        </div>
        <div class="paciente-item" data-patient-key="loki">
          <img src="https://i.pinimg.com/736x/a1/e8/bd/a1e8bd916367b559284d32312bbb51be.jpg" alt="Loki">
          <span>Loki</span>
        </div>
        <div class="paciente-item" data-patient-key="zulu">
          <img src="https://i.pinimg.com/736x/49/83/95/4983956d744c6914916e57f787d960d5.jpg" alt="Zulu">
          <span>Zulu</span>
        </div>
        <div class="paciente-item" data-patient-key="loro">
            <img src="https://i.pinimg.com/736x/14/bb/b2/14bbb2f605e27df0f8281541bce6d369.jpg" alt="Loro">
            <span>Loro</span>
        </div>
        </div>
    </aside>

    <div class="pacientes-e-detalhes">
      <div class="paciente-detalhes" id="pacienteDetalhes">
        </div>
    </div>
  </div>
</body>
</html>

