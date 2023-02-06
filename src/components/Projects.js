import "../styles/Projects.css";

import IndividualProject from "./IndividualProject";

function Projects() {

    return <section className="projects-component">
        <h2>PROJECTS</h2>
        <div className="individual-projects">
            <IndividualProject
            name="GCFlix"
            description="Feito com React.js e utilizando Firebase para o Back-End. Protótipo de uma plataforma de streaming altamente inspirada pela Netflix."
            image="./img/GCFlix.png"
            />
            <IndividualProject
            name="Ready CV"
            description="Feito com React.js. Esse projeto consiste em um gerador de Curriculum Vitae. O usuário insere suas informações e a aplicação gera um Curriculum Vitae em formato pdf. O usuário pode inserir informações pessoais, como nome, título, endereço, descrição, etc. Há uma seção onde o usuário pode inserir quantas experiências profissionais desejar, especificando datas, empresa, cargo, etc."
            image="./img/CVCreator.png"
            />
            <IndividualProject
            name="Where Are The Heroes?"
            description="Feito com React.js e utilizando Firebase para o Back-End. Implementação de um jogo similar a 'Onde Está Wally?' com temática da Marvel Comics. Há uma foto com vários super heróis e o jogador precisa encontrar três específicos. Quando o jogo começa, um cronômetro começa a contar e quando o jogador terminar de encontrar os três personagens, ele pode enviar sua pontução/tempo. O jogador pode ver uma leaderboard com os 10 melhores tempos já atingidos."
            image="./img/whereAreTheHeroes.png"
            />
            <IndividualProject
            name="Battleship"
            description="Esse projeto consiste na implementação do clássico jogo 'Batalha Naval'. Há 5 navios (tamanhos: 5, 4, 3, 2 e 1) para posicionar em um tabuleiro 10x10. Os navios inimigos são posicionados aleatoriamente. O jogo termina quando você acerta todos os navios inimigos ou quando o inimigo acerta todos os seus. Um dos projetos mais importantes para mim, que me ensinou que quando um projeto parace muito difícil, a melhor coisa a se fazer é me acalmar e dividir um problema grande em problemas menores, focando em uma coisa de cada vez."
            image="./img/battleship.png"
            />
            <IndividualProject
            name="Weather Forecast"
            description="Consiste em uma página web que mostra a previsão do tempo usando a API OpenWeatherMap. O usuário pode procurar por qualquer local que quiser e checar informações tais como a situação do clima, temperatura, temperaturas mínimas e máximas, velocidade do vento e outros dados. O usuário também pode escolher entre celsius e farenheit para a exibição de informação de temperatura."
            image="./img/weatherForecast.png"
            />
            <IndividualProject
            name="Knight's Travails"
            description="Um projeto mais focado em ciência da computação e algoritmos. O projeto é uma solução para o problema do 'Caminho do Cavalo': Se temos um cavalo no quadrado A de um tabuleiro de xadrez, quanto movimentos ele precisa para chegar num quadrado B, e quais quadrados formam o caminho correto? O algoritmo criado para resolver este problema se baseia em teoria dos grafos."
            image="./img/knightsTravails.png"
            />
            <IndividualProject
            name="Etch-A-Sketch"
            description="Consiste em uma página web para criar pixel art. Foi um dos meus primeiros projetos, quando ainda estava começando a focar em desenvolvimento web, e foi o primeiro projeto meu do qual eu realmente me orgulhei."
            image="./img/etchASketch.png"
            />
        </div>
    </section>

}

export default Projects;