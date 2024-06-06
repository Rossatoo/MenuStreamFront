import "./card.css"

interface CardProps {
    price: number,
    name: string,
    image: string,
    description: string
}

export function Card({price, image, name, description} : CardProps)  {
    return (
        <div className = "card">
            <img src = {image}></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <p><b>Valor: </b> R$ {price}</p>
            
        </div>
    )
}