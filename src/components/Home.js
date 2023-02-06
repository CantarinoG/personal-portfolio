import "../styles/Home.css";

function Home() {

    return <section className="home-component">
        <div className="language-container">
            <span>IDIOMA/LANGUAGE:</span>
            <div className="language-btn-container">
                <button>
                PT-BR
                </button>
                <button>
                EN-US
                </button>
            </div>
        </div>
        <span className="description">Oi, eu sou Guilherme Cantarino.<br/>Desenvolvedor Front-End.</span>
        <a href="#" className="description">Me conheça
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"/></svg>
        </a>
    </section>

}

export default Home;