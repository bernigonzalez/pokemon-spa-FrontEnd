import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../actions";
import styles from './SearchBar.module.css'

export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState('') //creo un estado local

    function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value) //Modifico mi estado local de acuardo al input
        //console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(name){
            dispatch(getPokemonsByName(name))
            setName("") //Envio mi estado local
        }
        else {
            return alert("Pokemon not found")
        }
        
    }

    return (
        <div>
            <input className={styles.search} type="text" placeholder="Search..." onChange={(e) => handleInputChange(e)} />
            <button className={styles.btn} type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
} 
