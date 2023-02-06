import "../styles/IndividualProject.css";

function IndividualProject({name, description, image, demoLink, codeLink}) {

    return <div className="individual-proj-component">
        <div className="picture" style={{ 
                    backgroundImage: `url(${image})` 
                  }}/>
        <div className="info">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={demoLink} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>monitor</title><path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" /></svg>
                Live preview
            </a>
            <a href={codeLink} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>xml</title><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg>
                Code
            </a>
        </div>
    </div>

}

export default IndividualProject;