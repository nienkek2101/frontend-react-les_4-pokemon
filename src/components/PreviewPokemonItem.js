import React, { useState, useEffect } from 'react';
import './PreviewPokemonItem.css'
import axios from "axios";

function PreviewPokemonItem({ linkPokemon }) {
    const [dataPokemon, setDataPokemon] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(linkPokemon);
                setDataPokemon(result.data);
                // console.log(dataPokemon);

            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [linkPokemon]);


    return (
        <>
            {dataPokemon &&
            <div class="pokemon-block">
                <h1>{dataPokemon.name}</h1>
                <img src={dataPokemon.sprites.front_default} alt={dataPokemon.name}/>
                <p class="sub-title">Moves: <span>{dataPokemon.moves.length}</span></p>
                <p class="sub-title">Weight: <span>{dataPokemon.weight}</span></p>
                <p class="sub-title-abilities">Abilities:</p>
                    <ul>
                    {dataPokemon.abilities.map((pokemon) => {
                        return (
                                <li class="abilities" key={pokemon.ability.name}>{pokemon.ability.name}</li>
                        );
                    })}
                    </ul>
            </div>
            }
        </>
    );
}

export default PreviewPokemonItem;

// uitwerkingen geeft bij de key de volgende code:
// <li key={`${ability.ability.name}-${pokemon.name}`}>
//     {ability.ability.name}
// </li>

// return (
//     <>
//         <ul>
//             {dataPokemon && dataPokemon.map((pokemon) => {
//                 return (
//                     <li>
//                         <h1>{dataPokemon.name}</h1>
//                         <p>Moves: <span>{dataPokemon.moves.length}</span></p>
//                         <p>Weight: <span>{dataPokemon.weight}</span></p>
//                     </li>
//                 );
//             })}
//         </ul>
//     </>
// );

/* mbv Sam deze werkend gekregen dmv Object.keys().length > 0, maar later werkte hij niet meer? */
// Krijg de foutmelding cannot convert undefined or null to object

// return (
//     <>
//         {Object.keys(dataPokemon).length > 0 &&
//         <>
//             <h1>{dataPokemon.name}</h1>
//             <img src={dataPokemon.sprites.front_default} alt={dataPokemon.name}/>
//             <p>Moves: <span>{dataPokemon.moves.length}</span></p>
//             <p>Weight: <span>{dataPokemon.weight}</span></p>
//             <p>Abilities:
//                 {dataPokemon.abilities.map((pokemon) => {
//                     return (
//                         <li key={pokemon.ability.name}>{pokemon.ability.name}</li>
//                     );
//                 })}
//             </p>
//         </>
//         }
//     </>
// );