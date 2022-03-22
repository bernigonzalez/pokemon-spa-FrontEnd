const initialState = {
    pokemons : [],
    pokemonsFiltered: [],
    types: [],
    detail: []
}

function rootReducer(state=initialState, action ) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                pokemonsFiltered: action.payload

            }
        case 'GET_TYPES': 
        return {
                ...state,
                types: action.payload,
            };   
        case 'GET_POKS_BY_NAME':
            return {
                ...state,
                pokemonsFiltered: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }    
        case 'POST_POKEMON':
            return {
                ...state
            }        
        case "FILTER_BY_TYPES":
            const allPokemons = state.pokemonsFiltered;
            const typeFiltered =
                action.payload === "All"
                    ? allPokemons
                    : allPokemons.filter((e) => e.types.includes(action.payload) || e.types[0].name === action.payload || e.types[0].name === action.payload );
                    // : allPokemons.filter((e) => (!e.createdInDb) ? e.types.includes(action.payload) : e.types.name.includes(action.payload));
                return {
                ...state,
                pokemonsFiltered: typeFiltered
            };
        case "FILTER_BY_SOURCE":
            let allPokemons2 = state.pokemonsFiltered
            const filter = action.payload === "db" ? allPokemons2.filter(e=> e.createdInDb) : allPokemons2.filter((e) => !e.createdInDb);
            return {
                ...state,
                pokemonsFiltered: action.payload === "All" ? state.pokemonsFiltered : filter
            }
            case 'ORDER_BY_NAME':
                const sortedArray = action.payload === 'asc' ?
                state.pokemonsFiltered.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    } else if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1
                    }
                    return 0
                }) : 
                state.pokemonsFiltered.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    } else if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1
                    }
                    return 0
                }) 
                return {
                    ...state,
                    pokemonsFiltered: sortedArray
                }
        case 'ORDER_BY_ATTACK':         
            const sortedArray2 = action.payload === 'Menor' ?
            state.pokemonsFiltered.sort((a, b) => {
                if(a.attack > b.attack) {
                    return 1
                } else if(b.attack > a.attack) {
                    return -1
                }
                return 0
            }) : 
            state.pokemonsFiltered.sort((a, b) => {
                if(a.attack > b.attack) {
                    return -1
                } else if(b.attack> a.attack) {
                    return 1
                }
                return 0
            }) 
            return {
                ...state,
                pokemonsFiltered: sortedArray2
            }
            
        default:
            return state    
    }
}

export default rootReducer