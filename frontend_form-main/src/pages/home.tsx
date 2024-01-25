import React from 'react'
import styles from '../style/home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
     return (<>
          <h1 className={styles.heading}>This is home page</h1>
          <div className={styles.container} >
               <Link to='/register' ><button className={styles.btn} >Register</button></Link>
               <Link to='/login' ><button className={styles.btn} >Login</button></Link>
          </div>
     </>)
}

export default Home