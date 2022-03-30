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


    if(pokemon.name) {
        return (
            <div >
                <NavBar />
                <br />
                <br />
                <div className={styles.card}>
                <div className={styles.title}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                <div>
                    <img className={styles.image} src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div>#{pokemon.id}</div>
                 
                <div>
                    <div className={styles.stats}>
                        <div>HP</div>
                        <div>{pokemon.stats[0].base_stat}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Attack</div>
                        <div>{pokemon.stats[0].base_stat}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Defense</div>
                        <div>{pokemon.stats[2].base_stat}</div>
                    </div>
                    <div className={styles.stats}>
                        <div>Speed</div>
                        <div>{pokemon.stats[5].base_stat}</div>
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
