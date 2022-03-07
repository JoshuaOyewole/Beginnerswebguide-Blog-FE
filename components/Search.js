import React from 'react'
import styles from '../styles/Search.module.css'


export default function Search({classname}) {
  return (
    <div className={classname}> 
        <form>
            <input type="search" placeholder='Search'
            className={styles.searchField} />
            <input type="submit" value='Search' className={styles.submitBtn}/>
        </form>
    </div>
  )
}
