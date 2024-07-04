import "./card.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
    price: number,
    name: string,
    image: string,
    description: string
    onAddToCart: () => void
}

export function Card({price, image, name, description, onAddToCart} : CardProps)  {
    return (
        <div className="card" style={{width: "18rem", border: "0px"}} >
            <img src = {image} className="image"></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <p><b>Valor: </b> R$ {price}</p>
            <button onClick={onAddToCart} className="btn-add-to-cart">Adicionar ao Carrinho</button>
        </div>
    )
}