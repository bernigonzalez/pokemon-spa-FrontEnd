import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {Link } from 'react-router-dom';
import { createPokemon, getTypes } from "../../actions";
import styles from "./CreatePokemon.module.css"
import NavBar from "../NavBar/NavBar"

export default function CreatePokemon(){
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        types: [],
        image: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
      });

      useEffect(() => {
        dispatch(getTypes());
      }, [dispatch]);      

    function handleChange(e){
        
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] :e.target.value
        }))
        
    }  

    function handleSelect(e){
        console.log(input.types.length)
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        Object.keys(errors).length ? alert('Error: Checkear que el formulario este correcto') :
        dispatch(createPokemon(input)) &&
        alert("Tu Pokemon ha sido creado exitosamente")
        setInput({
            name: "",
            types: [],
            image: "",
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
          })

          
    }

    function handleDelete(t) {
        setInput({
            ...input,
            types: input.types.filter(e => e !== t)
        })
      }

    function validate(input){
        let errors = {};
        if(!input.name) {
            errors.name = 'Name is required'
          } else if (parseInt(input.name)) {
            errors.name = 'Name is invalid, write a text'
          }
        if(input.hp < 10 || input.hp > 150) {
            errors.hp = "HP must be greater than 10 and smaller than 150"
        }
        if(input.attack < 10 || input.attack > 150) {
            errors.attack = "Attack must be greater than 10 and smaller than 150"
        }
        if(input.defense < 10 || input.defense > 150) {
            errors.defense = "Attack must be greater than 10 and smaller than 150"
        }
        return errors
    }

    let kid = 1;

    return (
        <div>
            <NavBar />
            {/* <Link to='/home'> <button className={styles.atras}> Regresar al Home </button> </Link>
             */}
             <br />
             <br />
            <form className={styles.form} onSubmit={ (e) => handleSubmit(e) } >
            <h3 className={styles.title}>Customize your own Pokemon</h3>
                <div>
                    <label >Name:</label>
                    <input 
                        className={styles.input}
                        type="text" 
                        value = {input.name}
                        name = "name"
                        onChange={(e) => handleChange(e) }
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="">Image:</label>
                    <input 
                        className={styles.input}
                        type="text"
                        value = {input.image}
                        name = "image" 
                        onChange={(e) => handleChange(e) }
                    />

                </div>

                <div>
                    <label htmlFor="">HP:</label>
                    <input 
                        className={styles.input}
                        type="number"
                        value={input.hp}
                        name = "hp" 
                        onChange={(e) => handleChange(e) }
                    />
                    {errors.hp && (
                        <p>{errors.hp}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="">Attack:</label>
                    <input 
                        className={styles.input}
                        type="number"
                        value={input.attack}
                        name = "attack" 
                        onChange={(e) => handleChange(e) }
                    />
                </div>
                {errors.attack && (
                        <p>{errors.attack}</p>
                    )}

                <div>
                    <label htmlFor="">Defense:</label>
                    <input 
                        className={styles.input}
                        type="number"
                        value={input.defense}
                        name = "defense" 
                        onChange={(e) => handleChange(e) }
                    />
                </div>
                {errors.defense && (
                        <p>{errors.defense}</p>
                    )}

                <div>
                    <label htmlFor="">Speed:</label>
                    <input 
                        className={styles.input}
                        type="number"
                        value={input.speed}
                        name = "speed" 
                        onChange={(e) => handleChange(e) }
                    />
                </div>

                <div>
                    <label htmlFor="">Height(cm):</label>
                    <input 
                        className={styles.input}
                        type="number"
                        value={input.height}
                        name = "height" 
                        onChange={(e) => handleChange(e) }
                    />
                </div>

                <div>
                    <label htmlFor="">Weight(kg):</label>
                    <input 
                        className={styles.input}
                        type="number"
                        value={input.weight}
                        name = "weight" 
                        onChange={(e) => handleChange(e) }
                    />
                </div>

                <br />        
                <select className={styles.selectForm} onChange={(e) => handleSelect(e) } name="" id="">
                        <option defaultValue="default" value="">Select types</option>
                    {
                        types.map( (t) => 
                            
                            <option key={t.id} value={t.name}>{t.name}</option>
                            
                        )
                }    
                </select>
                
                {input.types.length > 2 
                    ? <p>Select one or two types only</p>
                    : null
                }
                
                {input.types.map((t) => 
                <div key={kid++}>
                  <p className={styles.types}>{t}</p>
                  <button className={styles.btn} onClick={(() => handleDelete(t))}>X</button>
                </div>
              )}
                
                 <br />   
                <button type="submit" disabled={Object.keys(errors).length > 0 || (input.types.length < 1 || input.types.length > 2 ) ? true : false} className={styles.btnSend}>Create Pokemon</button>
            </form>   
        </div>
    )    
}

