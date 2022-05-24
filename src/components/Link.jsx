import React from 'react'
import styles from '../app.module.css'

const Link = () => {
    const list = ["services","project","about"]
  return (
    <div className={styles.link}>
       {list.map((e)=>{
           return <p>{e}</p>
       })}
        
    </div>
  )
}

export default Link