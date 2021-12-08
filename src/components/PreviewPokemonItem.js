import React from 'react';

function PreviewPokemonItem({ dataPokemon }) {
    // return (
    //     <>
    //         {/*{dataPokemon && }*/}
    //         <h1>{dataPokemon.name}</h1>
    //         <p>Moves: <span>{dataPokemon.moves.length}</span></p>
    //         <p>Weight: <span>{dataPokemon.weight}</span></p>
    //         {/*<p>Abilities: <span>{dataPokemon.abilities[0].ability.name}</span> <span>{dataPokemon.abilities[1].ability.name}</span> <span>{dataPokemon.abilities[2].ability.name}</span></p>*/}
    //
    //         {/*<img src={dataPokemon.sprites.front_default} alt={dataPokemon.name}>*/}
    //     </>
    // );
    return (
        <>
            <ul>
                {dataPokemon && dataPokemon.map((pokemon) => {
                    return (
                        <li>
                            <h1>{pokemon.name}</h1>
                            {/*<p>Moves: <span>{pokemon.moves.length}</span></p>*/}
                            {/*<p>Weight: <span>{pokemon.weight}</span></p>*/}
                        </li>
                    );
                })}
            </ul>
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