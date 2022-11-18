const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    let pokeImg = `${POKE_API}${props.id}.png`;
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-name">{props.name}</h3>
            <img className="Pokecard-img" src={pokeImg} alt="Poke Img"/>
            <p className="Pokecard-type">Type: {props.type}</p>
            <p className="Pokecard-exp">EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard