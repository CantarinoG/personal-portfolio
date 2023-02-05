import "../styles/Card.css";

function Card({svg, name}) {

    return <div className="card">
        {svg}
        <span>{name}</span>
    </div>

}

export default Card;