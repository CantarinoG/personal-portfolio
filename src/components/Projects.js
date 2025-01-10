import "../styles/Projects.css";

import IndividualProject from "./IndividualProject";

function Projects({text}) {

    return <section className="projects-component" id="projects-component">
        <h2>{text.projectsH2}</h2>
        <div className="individual-projects">
        <IndividualProject
            text={text}
            name="Flashcard Pets"
            description={text.projectsFlashcardPets}
            image="./img/flashcardPets.jpeg"
            demoLink="https://www.youtube.com/watch?v=09gkzyIUMSQ"
            codeLink="https://github.com/CantarinoG/flashcard-pets"
            />
        <IndividualProject
            text={text}
            name="Handy Input"
            description={text.projectsHandyInput}
            image="./img/handyInput.png"
            demoLink="https://www.youtube.com/watch?v=TBxxx_7NxX8"
            codeLink="https://github.com/CantarinoG/handy-input"
            />
        <IndividualProject
            text={text}
            name="Flow Shop"
            description={text.projectsFlowShop}
            image="./img/flowShop.png"
            demoLink="https://inventory-17r1.onrender.com"
            codeLink="https://github.com/CantarinoG/inventory"
        />
        <IndividualProject
            text={text}
            name="BemGestar"
            description={text.projectsBemGestar}
            image="./img/bemGestar.png"
            demoLink="https://youtu.be/TrFLTXb4y0k"
            codeLink="https://github.com/CantarinoG/plataforma-gestantes"
        />
         <IndividualProject
            text={text}
            name="Expenses App"
            description={text.projectsExpenses}
            image="./img/expenses.png"
            demoLink="https://youtube.com/shorts/bf4h3GP2QF4"
            codeLink="https://github.com/CantarinoG/expenses-app"
        />
        <IndividualProject
            text={text}
            name="ToDo App"
            description={text.projectsTodo}
            image="./img/todo.png"
            demoLink="https://youtube.com/shorts/bgZE_RlVXX0"
            codeLink="https://github.com/CantarinoG/todo"
        />
         <IndividualProject
            text={text}
            name="Paint Brush"
            description={text.projectsPaint}
            image="./img/paint.png"
            demoLink="https://youtu.be/YF4ExxG5YGM"
            codeLink="https://github.com/CantarinoG/paint-brush"
        />
        <IndividualProject
            text={text}
            name="Travelling Salesman Demo"
            description={text.projectsTravellingSalesman}
            image="./img/travelling.png"
            demoLink="https://cantarinog.github.io/traveling-salesman-simulated-annealing/"
            codeLink="https://github.com/CantarinoG/traveling-salesman-simulated-annealing"
        />
        <IndividualProject
            text={text}
            name="Knight's Travails"
            description={text.projectsKnight}
            image="./img/knightsTravails.png"
            demoLink="https://cantarinog.github.io/knights-travails/"
            codeLink="https://github.com/CantarinoG/knights-travails"
        />
        <IndividualProject
            text={text}
            name="Battleship"
            description={text.projectsBattleShip}
            image="./img/battleship.png"
            demoLink="https://cantarinog.github.io/battleship/"
            codeLink="https://github.com/CantarinoG/battleship"
        />
        <IndividualProject
            text={text}
            name="Ready CV"
            description={text.projectsCV}
            image="./img/CVCreator.png"
            demoLink="https://cantarinog.github.io/cv-creator/"
            codeLink="https://github.com/CantarinoG/cv-creator"
        />
        <IndividualProject
            text={text}
            name="Where Are The Heroes?"
            description={text.projectsHeroes}
            image="./img/whereAreTheHeroes.png"
            demoLink="https://cantarinog.github.io/find-the-heroes/"
            codeLink="https://github.com/CantarinoG/find-the-heroes"
        />
        </div>
    </section>

}

export default Projects;