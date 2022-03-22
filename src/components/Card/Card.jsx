import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"




// export default function Card({ name, types, image, id, attack }) {
//   return (
//     <div className={styles.card}>
//       <img src={image} className={styles.img} alt="imagen"/>
//       <h3 className={styles.name}> {name.charAt(0).toUpperCase() + name.slice(1)}</h3>
//       <h4>Attack {attack}</h4>
//       <div>
//         <h6>{types[0]}</h6>
//         <h6>{types[1]}</h6>
         
//       </div>
//     </div>
//   );
// }

export default function CardPokemon({ name, types, image, id, attack, defense }) {
  return (
    <div className={styles.card}>
        <Link style={{ textDecoration: "none", color: "black" }} to= {"/home/" + id}>
          <div className={styles.title}>{name.charAt(0).toUpperCase() + name.slice(1)}</div>  
          <div >
            <img src={image} alt={name} className={styles.image}/>
          </div>
          <div >
              <div className={styles.types}>Type 1: {types[0]}</div>
              <div className={styles.types}>Type 2: {types[1]}</div>
          </div>
          <div className={styles.stats}>
                        <div>Attack</div>
                        <div>{attack}</div>
          </div>
              
        </Link>
    </div>
  );
}


