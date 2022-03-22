import React from "react";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {filterByTypes, getPokemons, getTypes, filterBySource, orderByName, orderByAttack}  from '../../actions';
//import {Link} from 'react-router-dom';
import Card from "../Card/Card";
import Paginado from "../paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css"


export default function Home (){
    const dispatch = useDispatch() //dejamos el metodo guardado en esta constante p/ despaachar nuestras acciones
    const allPokemons = useSelector((state) => state.pokemonsFiltered) //Con el hook useSelector traemos todo lo que esta en el state de pokemons
    const allTypes = useSelector((state) => state.types)
    //allPokemons.map(e=> console.log(e.types, typeof(e.types)))
    
    const [orden, setOrden] = useState('') 
    console.log(orden)

    const [currentPage, setCurrentPage] =  useState(1)
    const [pokemonsPerPage, setPokemonsPerpage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage 
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage 
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    // console.log("pokemons length", allPokemons.length)
    // console.log("firts index", indexOfFirstPokemon)
    // console.log("last index", indexOfLastPokemon)
    // console.log("pageNumber", Math.ceil(allPokemons.length/pokemonsPerPage))

    console.log(setPokemonsPerpage)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //Nos traemos los pokemons y los types del estado global CUANDO el componente se monta
     useEffect (()=> {
        dispatch(getPokemons()) //despachamos la accion que nos va a traer todos los pokemons
        dispatch(getTypes())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    const handleFilterTypes = (e) => {
        dispatch(filterByTypes(e.target.value))
    }
    
    const handleFilterSource = (e) => {
        dispatch(filterBySource(e.target.value))
    }

    const handleSort = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden('Ordenado' + e.target.value)
    }

    const handleSortAttack = (e) => {
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1)
        setOrden('Ordenado' + e.target.value)
    }

    return (
        <div>
            <NavBar />
            
            
            <div className={styles.select}>
                <button className={styles.selectBtn} onClick={ (e) => {handleClick(e)}}>
                RESET FILTERS
                </button>   
                <br />
                <label htmlFor="">Order by </label>
                <select className={styles.sadi} onChange={(e) => handleSort(e)}>
                    <option value="Filtro">Alphabetic</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>

                <select className={styles.sadi} onChange={(e) => handleSortAttack(e)}>
                    <option value="Fuerza"> Attack </option>
                    <option value="Mayor">Attack Asc</option>
                    <option value="Menor">Attack Des</option>
                </select>
                <br />
                
                <label htmlFor="">Filter by</label>
                <select className={styles.sadi} onChange={(e) => handleFilterTypes(e)}>
                        <option value="All">Types</option>

                        {               
                                    allTypes.map(t => (
                                        <option key={t.id}>{t.name}</option>
                                    ))
                                }
                </select> 


                <select className={styles.sadi} onChange={(e) => handleFilterSource(e)}>
                    <option value="All">Source</option>
                    <option value="db">Database</option>
                    <option value="api">Api</option>
                </select>

                <Paginado 
                    pokemonsPerPage={pokemonsPerPage}
                    allPokemons={allPokemons.length}
                    paginado={paginado}
                />

                <SearchBar />
                <ul className={styles.grid}>                    
                {currentPokemons?.map((e) => {
                    return (
                         <div key={e.id} >
                            
                                 <Card
                                     name={e.name}
                                     image={e.image}
                                     attack = {e.attack}  
                                     defense = {e.defense}
                                     id={e.id}   
                                     types={(!e.createdInDb)? e.types : e.types.map(e => e.name )}
                                />  
                            
                        </div>
                );
            })}
            </ul>
            </div>
        </div>
    )

}