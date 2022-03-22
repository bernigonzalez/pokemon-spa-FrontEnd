import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

// export default function NavBar(){
//     return (
//         <div >
//                 <Link to={"/home"} >
//                     <button>HOME</button>
//                 </Link>
//                 <Link to={"/pokemon"}>
//                     <button>CREATE POKEMON</button>
//                 </Link>    
//         </div>
//     )
// }

export default function NavBar() {
    return (
        <header id="navegador" className={styles.header}>
          <Link to="/home">
            <img  className={styles.logo} src="https://i.imgur.com/avg4dfp.png" alt="404" />
          </Link>
         <div> <Link to="/pokemon" className={styles.created} >
                Create Pokemon
              </Link></div>
    
        </header>
  
    );
  }