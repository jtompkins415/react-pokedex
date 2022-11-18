const Pokecard = ({name, image, type, exp}) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Poke Img"/>
            <p>{type}</p>
            <p>{exp}</p>
        </div>
    )
}

export default Pokecard