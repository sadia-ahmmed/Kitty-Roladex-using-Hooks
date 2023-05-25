import { Component } from "react";
import "./card.styles.css"

const Card = ({monster:{id, name, email}})=> ( 
    
    <div className='card-container' key={id}>  
        <img 
            alt={'monster ${name}'}
            src= {`https://robohash.org/1${id}?set=set4&size=180x180`}
            />
        <h2>{name}</h2>
        <p>{email}</p>
     </div>

);
        
export default Card;