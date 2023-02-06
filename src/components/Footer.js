import "../styles/Footer.css";

function Footer() {

    return <footer className="footer-component">
        <span>ATUALIZADO PELA ÚLTIMA VEZ EM: 05/02/2023</span>
        <div className="credits">
            <span>CRÉDITOS</span>
            <ul>
                <li>Fotografia da tela inicial por <a target="_blank" rel="noreferrer" href="https://www.pexels.com/pt-br/foto/foto-de-close-up-de-pessoa-digitando-no-laptop-1181675/">Christina Morillo</a> </li>
                <li>Icones por <a target="_blank" rel="noreferrer" href="https://pictogrammers.com/library/mdi/">Material Design Icons</a></li>
                <li>Logos por <a target="_blank" rel="noreferrer" href="https://devicon.dev">Devicon</a></li>
            </ul>
        </div>
    </footer>

}

export default Footer;