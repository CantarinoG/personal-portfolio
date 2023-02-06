import "../styles/Projects.css";

import IndividualProject from "./IndividualProject";

function Projects({text}) {

    return <section className="projects-component" id="projects-component">
        <h2>{text.projectsH2}</h2>
        <div className="individual-projects">
            <IndividualProject
            text={text}
            name="GCFlix"
            description={text.projectsDesc1}
            image="./img/GCFlix.png"
            demoLink="https://cantarinog.github.io/top-streaming-app/"
            codeLink="https://github.com/CantarinoG/top-streaming-app"
            />
            <IndividualProject
            text={text}
            name="Ready CV"
            description={text.projectsDesc2}
            image="./img/CVCreator.png"
            demoLink="https://cantarinog.github.io/top-cv-creator/"
            codeLink="https://github.com/CantarinoG/top-cv-creator"
            />
            <IndividualProject
            text={text}
            name="Where Are The Heroes?"
            description={text.projectsDesc3}
            image="./img/whereAreTheHeroes.png"
            demoLink="https://cantarinog.github.io/top-photo-tagging/"
            codeLink="https://github.com/CantarinoG/top-photo-tagging"
            />
            <IndividualProject
            text={text}
            name="Battleship"
            description={text.projectsDesc4}
            image="./img/battleship.png"
            demoLink="https://cantarinog.github.io/top-battleship/"
            codeLink="https://github.com/CantarinoG/top-battleship"
            />
            <IndividualProject
            text={text}
            name="Weather Forecast"
            description={text.projectsDesc5}
            image="./img/weatherForecast.png"
            demoLink="https://cantarinog.github.io/top-weather-app/"
            codeLink="https://github.com/CantarinoG/top-weather-app"
            />
            <IndividualProject
            text={text}
            name="Knight's Travails"
            description={text.projectsDesc6}
            image="./img/knightsTravails.png"
            demoLink="https://cantarinog.github.io/top-knights-travails/"
            codeLink="https://github.com/CantarinoG/top-knights-travails"
            />
            <IndividualProject
            text={text}
            name="Etch-A-Sketch"
            description={text.projectsDesc7}
            image="./img/etchASketch.png"
            demoLink="https://cantarinog.github.io/top-etch-a-sketch/"
            codeLink="https://github.com/CantarinoG/top-etch-a-sketch"
            />
        </div>
    </section>

}

export default Projects;