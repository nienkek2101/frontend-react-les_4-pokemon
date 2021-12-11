import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PreviewPokemonItem from "./components/PreviewPokemonItem";

function App() {
    // const [dataPokemon,setDataPokemon] = useState([]);
    // const [dataPokemon1, setDataPokemon1] = useState([]);
    const [dataAllPokemon, setDataAllPokemon] = useState([]);
    const [pokeApiEndpoint, setPokeApiEndpoint] = useState('https://pokeapi.co/api/v2/pokemon');


    useEffect(() => {
        async function fetchData() {
            try {
                // const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
                // setDataPokemon(result.data);
                // const result1 = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
                // setDataPokemon1(result1.data);

                const resultAll = await axios.get(pokeApiEndpoint);
                // console.log(resultAll.data.results);

                setDataAllPokemon(resultAll.data.results);
                console.log(dataAllPokemon);
                // console.log(dataAllPokemon[0].url);

            } catch(e) {
                console.error(e);
            }
        };

        fetchData();

    }, []);

    return (
        <div>
            {/*<button type="button" onClick={() => setPokeApiEndpoint(dataAllPokemon.next)}>Volgende</button>*/}
            {/*<button type="button" onClick={() => setPokeApiEndpoint(dataAllPokemon.previous)}>Vorige</button>*/}
            {dataAllPokemon && <> {dataAllPokemon.map((pokemon) => {
                return (
                        <li key={pokemon.name}><PreviewPokemonItem linkPokemon={pokemon.url}/></li>
                );
            })}
            </>
            }
        </div>
    );
}

export default App;

/* mbv Sam deze werkend gekregen dmv Object.keys().length > 0, maar later werkte hij niet meer? */
// Krijg de foutmelding cannot convert undefined or null to object

// return (
//     <div>
//         {Object.keys(dataAllPokemon).length > 0 && <> {dataAllPokemon.map((pokemon) => {
//             return (
//                 <li key={pokemon.name}><PreviewPokemonItem linkPokemon={pokemon.url}/></li>
//             );
//         })}
//         </>
//         }
//     </div>
// );


/* Poging 1 - 1 pokemon loggen lukt */
// function App() {
//     const [dataPokemon,setDataPokemon] = useState([]);
//     // const [dataPokemon1, setDataPokemon1] = useState([]);
//     const [dataAllPokemon, setDataAllPokemon] = useState([]);
//     // const [namePokemon, setNamePokemon] = useState('');
//     // const [imagePokemon, setImagePokemon] = useState('');
//     // const [countMovesPokemon, setCountMovesPokemon] = useState('0');
//     // const [weightPokemon, setWeightPokemon] = useState('0');
//     // const [abilitiesPokemon, setAbilitiesPokemon] = useState ([]);
//
//     useEffect(() => {
//         async function fetchData() {
//             // e.preventDefault();
//             try {
//                 const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
//                 setDataPokemon(result.data);
//                 // const result1 = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
//                 // setDataPokemon1(result1.data);
//                 //
//                 // const resultAll = await axios.get('https://pokeapi.co/api/v2/pokemon');
//                 // console.log(resultAll.data.results);
//                 // setDataAllPokemon(resultAll.data.results);
//
//                 // setNamePokemon(result.data.name);
//                 // setCountMovesPokemon(result.data.moves.length);
//                 // setWeightPokemon(result.data.weight);
//                 // setAbilitiesPokemon(result.data.abilities);
//
//                 // console.log(result);
//                 // console.log(namePokemon);
//                 // console.log(countMovesPokemon);
//                 // console.log(weightPokemon);
//                 // console.log(abilitiesPokemon);
//
//                 // console.log(dataPokemon);
//                 //
//                 // console.log(dataPokemon.name);
//                 // console.log(dataPokemon.moves.length);
//                 // console.log(dataPokemon.weight);
//                 // console.log(dataPokemon.abilities);
//                 // console.log(dataPokemon.sprites.front_default);
//
//             } catch(e) {
//                 console.error(e);
//             }
//         };
//
//         fetchData();
//
//     }, []);
//
//     return (
//         <div>
//             {Object.keys(dataPokemon).length > 0 &&
//             <>
//                 <h1>{dataPokemon.name}</h1>
//                 <img src={dataPokemon.sprites.front_default} alt={dataPokemon.name} />
//                 <p>Moves: <span>{dataPokemon.moves.length}</span></p>
//                 <p>Weight: <span>{dataPokemon.weight}</span></p>
//                 <p>Abilities:
//                     <span>{dataPokemon.abilities[0].ability.name}</span>
//                     <span>{dataPokemon.abilities[1].ability.name}</span>
//                     <span>{dataPokemon.abilities[2].ability.name}</span>
//                 </p>
//             </>
//             }
//         </div>
//     );
// }
//
// export default App;
