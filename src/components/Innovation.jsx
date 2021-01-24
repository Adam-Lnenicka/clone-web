import React from 'react'

export default function Innovation(props){
    return(
        <div className="innovation">
            <img src ={props.image}/>
            <p>{props.text}</p>
        </div>
    )
}