import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {Link } from 'react-router-dom';
import { useParams } from "react-router";
import { getDetail} from "../../actions";
import NavBar from "../NavBar/NavBar";
import styles from "./Details.module.css"

export default function Detail(props){
    const dispatch = useDispatch()
    const id = useParams().id
    const pokemon = useSelector((state) => state.detail)


    useEffect(()=> {
        dispatch(getDetail(id))
    },[dispatch, id])

    // if ((pokemon[0].createdInDb) || !pokemon[0].types[1].name) {
    //     pokemon[0].types.push({
    //         name: " "
    //     })
    // }

    if(pokemon) {
        return (
            <div >
                <NavBar />
                <br />
                <br />
                <div className={styles.card}>
                <div className={styles.title}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                <div>
                    <img className={styles.image} src={pokemon.image} alt={pokemon.name} />
                </div>
                <div>#{pokemon[0].id}</div>
                 <div>
                    <div className={styles.types}>Type 1: {(!pokemon.createdInDb)  ? pokemon.types[0] : pokemon.types[0].name}</div>
                    <div className={styles.types}>Type 2: {(!pokemon.createdInDb)  ? pokemon.types[1] : ((pokemon.types[1] ? pokemon.types[1].name : " "))}</div> 
                    
                </div>
                <div>
                    <div className={styles.stats}>
                        <div>HP</div>
                        <div>{pokemon.hp}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Attack</div>
                        <div>{pokemon.attack}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Defense</div>
                        <div>{pokemon.defense}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Speed</div>
                        <div>{pokemon.speed}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Weight</div>
                        <div>{pokemon.weight}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Height</div>
                        <div>{pokemon.height}</div>
                    </div>   
                </div>

        
                </div>
            </div>
        )
        }else {
            return (
            <div className={styles.loading}>Loading...</div> 
            )
        }
}
