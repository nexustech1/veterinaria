<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Registro e Prescrição</title>
    @vite(['resources/css/registro.css', 'resources/js/registro.js'])
</head>

<body>
<header class="header">
    <div class="logo">🐾 Pet+ VET</div>
    <nav>
      <a href="#">Contato</a>
    </nav>
  </header>
    <div class="main-container">
        <div class="cadastro-container">
            <div>
                <button class="back-button">←</button>
                <h2>CADASTRO</h2>
            </div>
            <div class="pet-info">
                <img src="gato_placeholder.png" alt="Foto do Pet">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" placeholder="Nome">
                    </div>
                    <div class="form-group">
                        <label for="idade">Idade:</label>
                        <input type="text" id="idade" placeholder="Idade">
                    </div>
                    <div class="form-group">
                        <label for="peso">Peso:</label>
                        <input type="text" id="peso" placeholder="Peso">
                    </div>
                    <div class="form-group">
                        <label for="altura">Altura/Comprimento:</label>
                        <input type="text" id="altura" placeholder="Altura/Comprimento">
                    </div>
                    <div class="form-group">
                        <label for="especie">Espécie:</label>
                        <input type="text" id="especie" placeholder="Espécie">
                    </div>
                    <div class="form-group">
                        <label for="numero_chip">Número do Chip:</label>
                        <input type="text" id="numero_chip" placeholder="Número do Chip">
                    </div>
                    <div class="form-group">
                        <label for="sexo">Sexo:</label>
                        <input type="text" id="sexo" placeholder="Sexo">
                    </div>
                    <div class="form-group">
                        <label>Castrado:</label>
                        <div class="radio-group">
                            <input type="radio" id="castrado_sim" name="castrado" value="sim">
                            <label for="castrado_sim">Sim</label>
                            <input type="radio" id="castrado_nao" name="castrado" value="nao">
                            <label for="castrado_nao">Não</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="raca">Raça:</label>
                        <input type="text" id="raca" placeholder="Raça">
                    </div>
                    <div class="form-group">
                        <label>Medicações em uso:</label>
                        <div class="radio-group">
                            <input type="radio" id="medicacao_sim" name="medicacao" value="sim">
                            <label for="medicacao_sim">Sim</label>
                            <input type="radio" id="medicacao_nao" name="medicacao" value="nao">
                            <label for="medicacao_nao">Não</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tutor-info">
                <h3>DADOS DO TUTOR</h3>
                <p>Nome: Meire da Costa Silva</p>
                <p>CPF: 105.646.710-04</p>
                <p>Email: Meireisilva@gmail.com</p>
                <p>Celular: 11 99529-3907</p>
            </div>
            <div class="sintomas">
                <h3>SINTOMAS</h3>
                <textarea placeholder="Digite os sintomas aqui"></textarea>
            </div>
            <div class="pagination">
                <span>00/00</span>
            </div>
            <div class="actions">
                <button class="print-button">⎙</button>
                <button class="save-button">💾</button>
            </div>
        </div>
        <div class="prescricao-container">
            <div>
            <button class="next-button">→</button>
                <h2>PRESCRIÇÃO MÉDICA</h2>
                
            </div>
            <div class="prescricao-area">
                <textarea placeholder="Digite a prescrição médica"></textarea>
            </div>
            <div class="actions">
                <button class="print-button">⎙</button>
                <button class="save-button">💾</button>
            </div>
            <div class="pagination">
                <span>00/00</span>
            </div>
        </div>
    </div>
</body>
</html>