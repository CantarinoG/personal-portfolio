import "../styles/Footer.css";

function Footer({text}) {

    return <footer className="footer-component">
        <span>{text.footerLastUpdate}</span>
        <div className="credits">
            <span>{text.footerCredits}</span>
            <ul>
                <li>{text.footerCredits1}<a target="_blank" rel="noreferrer" href="https://www.pexels.com/pt-br/foto/foto-de-close-up-de-pessoa-digitando-no-laptop-1181675/">Christina Morillo</a> </li>
                <li>{text.footerCredits2}<a target="_blank" rel="noreferrer" href="https://pictogrammers.com/library/mdi/">Material Design Icons</a></li>
                <li>{text.footerCredits3}<a target="_blank" rel="noreferrer" href="https://devicon.dev">Devicon</a></li>
            </ul>
        </div>
    </footer>

}

export default Footer;