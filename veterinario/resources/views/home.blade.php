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
      <a href="#">Contato</a>
    </nav>
  </header>

  <div class="main-container">
    <aside class="sidebar">
      <button class="novo-btn">Novo Paciente</button>

      <div class="calendario">
        <div><strong>D  S  T  Q  Q  S  S</strong></div>
        <table>
          <tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
          <tr><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr>
          <tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr>
          <tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>
          <tr><td>31</td></tr>
        </table>
      </div>

      <div class="resumo">
        <h3>Resumo do dia:</h3>
        <p><strong>9h: Loki</strong><br> - Retorno de consulta</p>
        <p><strong>11h: Zulu</strong><br> - Vacinação</p>
        <p><strong>13h: Loro</strong><br> - Consulta</p>
        <p><strong>14h: Nino</strong><br> - Exames</p>
      </div>

      <button class="lembrete-btn">+ Lembrete</button>
    </aside>

    <div class="pacientes-e-detalhes">
      <div class="pacientes-container">
        <h2>Pacientes</h2>
        <div class="paciente-lista">
          <div class="paciente-item"><img src="https://i.imgur.com/1P4Avpp.png" alt="Garfield"><span>Garfield</span></div>
          <div class="paciente-item"><img src="https://i.imgur.com/nH2tZxH.png" alt="Loki"><span>Loki</span></div>
          <div class="paciente-item"><img src="https://i.imgur.com/gQj0LqV.png" alt="Zulu"><span>Zulu</span></div>
          <div class="paciente-item"><img src="https://i.imgur.com/VV2aJ1u.png" alt="Loro"><span>Loro</span></div>
          <div class="paciente-item"><img src="https://i.imgur.com/kN6LkFh.png" alt="Nino"><span>Nino</span></div>
        </div>
      </div>

      <div class="paciente-detalhes">
        <img src="https://i.imgur.com/1P4Avpp.png" alt="Garfield">
        <h3>Nome: Garfield<br>
          Raça: <a href="#">SRD</a><br>
          Idade: <a href="#">2 anos</a>
        </h3>
        <ul>
          <li>Garfield é um gato amarelo com olhos verdes intensos, cheio de personalidade.</li>
          <li>Sua pelagem dourada e olhar curioso dão um ar de elegância preguiçosa.</li>
          <li>Independente, carismático e um pouco sarcástico, ele domina qualquer ambiente com charme felino.</li>
        </ul>

        <hr>

        <h4>Sintomas</h4>
        <ul>
          <li>Falta de apetite – não está comendo como de costume</li>
          <li>Letargia – parece mais cansado ou dormindo demais</li>
          <li>Olhos lacrimejando ou remelando</li>
          <li>Espirros ou tosse leve</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
