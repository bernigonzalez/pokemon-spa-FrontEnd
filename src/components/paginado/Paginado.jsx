import React from "react";
import styles from './Paginado.module.css'

export default function Paginado ( {pokemonsPerPage, allPokemons, paginado} ) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

        
    return (
        <nav>
            <ul className={styles.paginado} >
                {
                    pageNumbers?.map( (number) => (
                        
                        <li className={styles.number}  key={number}>  
                            <button className={styles.btn} onClick={ () => paginado(number) } href='Page Number' > {number}</button>
                        </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}