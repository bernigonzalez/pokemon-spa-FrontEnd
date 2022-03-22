const axios = require('axios');



export function getPokemons() {
    return function(dispatch) {
        axios.get("http://localhost:3001/pokemons")
        .then((d) => {
            return dispatch({
                type: 'GET_POKEMONS',
                payload: d.data
            })
        })
        .catch((err) => {console.log(err)}) 
    }
}

export function getTypes () {
    return async function(dispatch) {
        try {
            let types = await axios.get('http://localhost:3001/types');
            dispatch({
                type: 'GET_TYPES',
                payload: types.data
            })
        } catch(e){
            console.log(e);
        }
    }
}

export function getPokemonsByName(name) {
    return async function(dispatch) {
        try {
            // var json = await axios.get(`http://localhost:3001/pokemons?name=${name}` );
            var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
            return dispatch ({
                type: 'GET_POKS_BY_NAME',
                payload : json.data
            })
        }catch(err) {
            console.log(err)
        }
    }
}

export function createPokemon(payload) {
    return async function(dispatch){
        try {
            var response = await axios.post("http://localhost:3001/pokemons", payload)
            return response
        }catch(err){
            console.log(err)
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/pokemons/" + id)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }
            catch(err){
            console.log(err)
    }
}
}

export function filterByTypes(payload) {
    return {
        type: 'FILTER_BY_TYPES',
        payload: payload
    }
}

export function filterBySource(payload) {
    return {
        type: 'FILTER_BY_SOURCE',
        payload: payload
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload: payload
    }
}

export function orderByAttack(payload) {
    return {
        type: 'ORDER_BY_ATTACK',
        payload: payload
    }
}

