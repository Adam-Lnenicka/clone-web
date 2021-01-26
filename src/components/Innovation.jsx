import React from 'react'

export default function Innovation(props){
    return(
        <div className="innovation">
            <img src ={props.image} alt="innovative"/>
            <p>{props.text}</p>
        </div>
    )
}