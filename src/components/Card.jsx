import React from 'react'

export default function Card(props){
    return(
    <div className="card">
        <img src ={props.image}/>
        <div>
            <h3 style={{display: !props.subtitle && "none"}}>{props.subtitle}</h3>
            <h2 style={{display: !props.title2 && "none"}}>{props.title2}</h2>
            <h5 style={{display: !props.author && "none"}}>{props.author}</h5>
            <p>{props.text}</p>
            <h5 style={{display: !props.fullAuthor && "none"}}>{props.fullAuthor}</h5>
            <h5 style={{display: !props.place && "none"}}>{props.place}</h5>

            <a href="/">{props.button}</a>
        </div>
    </div>
    )
}