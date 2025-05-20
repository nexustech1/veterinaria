<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Novo Paciente</title>
    @vite(['resources/css/np.css', 'resources/js/np.js'])
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header class="header">
        <div class="logo">
            <span>🐾 Pet+ VET</span>
        </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Serviços</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
        </nav>
        <div class="search-icon">
            <i class="fas fa-search"></i>
        </div>
    </header>

    <div class="main-container">
        <h1 class="page-title">Novo Paciente</h1>

        <div class="cards-wrapper">
            <div class="cadastro-card">
                <div class="card-header">
                    <i class="fas fa-user-circle user-icon"></i>
                    <h2>CADASTRO PACIENTE</h2>
                </div>
                <div class="card-content">
                    <div class="form-grid-patient">
                        <div class="form-group">
                            <label for="nome_paciente">Nome:</label>
                            <input type="text" id="nome_paciente">
                        </div>
                        <div class="form-group">
                            <label for="idade_paciente">Idade:</label>
                            <input type="text" id="idade_paciente">
                        </div>
                        <div class="form-group">
                            <label for="especie_paciente">Espécie:</label>
                            <input type="text" id="especie_paciente">
                        </div>
                        <div class="form-group">
                            <label for="sexo_paciente">Sexo:</label>
                            <input type="text" id="sexo_paciente">
                        </div>
                        <div class="form-group">
                            <label for="raca_paciente">Raça:</label>
                            <input type="text" id="raca_paciente">
                        </div>
                        <div class="form-group">
                            <label for="peso_paciente">Peso:</label>
                            <input type="text" id="peso_paciente">
                        </div>
                        <div class="form-group">
                            <label for="altura_paciente">Altura:</label>
                            <input type="text" id="altura_paciente">
                        </div>
                        <div class="form-group">
                            <label for="comprimento_paciente">Comprimento:</label>
                            <input type="text" id="comprimento_paciente">
                        </div>
                        <div class="form-group radio-group-stacked">
                            <label>Castrado:</label>
                            <div>
                                <input type="radio" id="castrado_sim" name="castrado" value="Sim">
                                <label for="castrado_sim">( ) Sim</label>
                            </div>
                            <div>
                                <input type="radio" id="castrado_nao" name="castrado" value="Não">
                                <label for="castrado_nao">( ) Não</label>
                            </div>
                        </div>
                        <div class="form-group radio-group-stacked">
                            <label>Medicação em uso:</label>
                            <div>
                                <input type="radio" id="medicacao_sim" name="medicacao" value="Sim">
                                <label for="medicacao_sim">( ) Sim</label>
                            </div>
                            <div>
                                <input type="radio" id="medicacao_nao" name="medicacao" value="Não">
                                <label for="medicacao_nao">( ) Não</label>
                            </div>
                        </div>
                        <div class="form-group radio-group-stacked">
                            <label>Já fez alguma cirurgia?</label>
                            <div>
                                <input type="radio" id="cirurgia_sim" name="cirurgia" value="Sim">
                                <label for="cirurgia_sim">( ) Sim</label>
                            </div>
                            <div>
                                <input type="radio" id="cirurgia_nao" name="cirurgia" value="Não">
                                <label for="cirurgia_nao">( ) Não</label>
                            </div>
                            <input type="text" id="cirurgia_qual" placeholder="Qual?">
                        </div>
                        </div>
                    <div class="observation-area">
                        <label>Observação</label>
                        <textarea placeholder=""></textarea>
                    </div>
                </div>
            </div>

            <div class="cadastro-card">
                <div class="card-header">
                    <i class="fas fa-user-circle user-icon"></i>
                    <h2>CADASTRO DONO</h2>
                </div>
                <div class="card-content">
                    <div class="form-grid-owner">
                        <div class="form-group">
                            <label for="nome_dono">Nome:</label>
                            <input type="text" id="nome_dono">
                        </div>
                        <div class="form-group">
                            <label for="idade_dono">Idade:</label>
                            <input type="text" id="idade_dono">
                        </div>
                        <div class="form-group">
                            <label for="contato_dono">Contato:</label>
                            <input type="text" id="contato_dono">
                        </div>
                        <div class="form-group">
                            <label for="email_dono">Email:</label>
                            <input type="email" id="email_dono">
                        </div>
                        <div class="form-group">
                            <label for="telefone_dono">Telefone:</label>
                            <input type="tel" id="telefone_dono">
                        </div>
                        <div class="form-group">
                            <label for="telefone_emergencia_dono">Telefone de Emergência:</label>
                            <input type="tel" id="telefone_emergencia_dono">
                        </div>
                        <div class="form-group">
                            <label for="endereco_dono">Endereço:</label>
                            <input type="text" id="endereco_dono">
                        </div>
                    </div>
                    <div class="observation-area">
                        <label>Observação</label>
                        <textarea placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>