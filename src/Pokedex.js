import pokemon from './Pokemon'
import Pokecard from './Pokecard'

const Pokedex = () => {
    return (
        <div>
            {pokemon.map(p => (
                <Pokecard key={p.id} name={p.name} image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png." type={p.type} exp={p.base_experience}/>
            ))}
        </div>
    )
}

export default Pokedex