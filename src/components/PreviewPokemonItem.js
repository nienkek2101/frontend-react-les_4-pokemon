import React, { useState, useEffect } from 'react';
import axios from "axios";

function PreviewPokemonItem({ linkPokemon }) {
    const [dataPokemon, setDataPokemon] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(linkPokemon);
                setDataPokemon(result.data);
                console.log(dataPokemon);

            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);


    return (
        <>
        {/*    {Object.keys(dataPokemon).length > 0 &&*/}
        {/*    <>*/}
        {/*        <h1>{dataPokemon.name}</h1>*/}
        {/*        <img src={dataPokemon.sprites.front_default} alt={dataPokemon.name}/>*/}
        {/*        <p>Moves: <span>{dataPokemon.moves.length}</span></p>*/}
        {/*        <p>Weight: <span>{dataPokemon.weight}</span></p>*/}
        {/*        <p>Abilities:*/}
        {/*            {dataPokemon.abilities.map((pokemon) => {*/}
        {/*                return (*/}
        {/*                        <li>{pokemon.ability.name}</li>*/}
        {/*                );*/}
        {/*            })}*/}
        {/*        </p>*/}
        {/*    </>*/}
        {/*    }*/}
        </>
    );
}

export default PreviewPokemonItem;

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