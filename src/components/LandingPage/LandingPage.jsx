import React from "react";
import { Link } from "react-router-dom";
import styles from  "./LandingPage.module.css"
import img from "./landing.jpg"




export default function LandingPage() {
  return (
    <div className={styles.landing}>
        <img src={img} alt="landingImage" className={styles.img} />
      <div>
        </div>
        <Link to="/home">
          <button className={styles.btn}> HOME </button>
        </Link>
    </div>
 
  )
}