import React from 'react'

export default function Card(props){
    return(
    <div className="card">
        <img src ={props.image} alt="creative-work"/>
        <div className="inner-card">
            <h4 style={{display: !props.subtitle && "none"}}>{props.subtitle}</h4>
            <h3 style={{display: !props.title2 && "none"}}>{props.title2}</h3>
            <div className="black"><h3 style={{display: !props.title1 && "none"}}>{props.title1}</h3></div>
            <div className="name"><p style={{display: !props.author && "none"}}>{props.author}</p></div>
            <p className="txt">{props.text}</p>
            <p className="txt2">{props.text2}</p>
            <div className="name">
                <p style={{display: !props.fullAuthor && "none"}}>{props.fullAuthor}</p>
                <p style={{display: !props.place && "none"}}>{props.place}</p>
            </div>
            <img style={{display: !props.logo && "none"}} src ={props.logo} alt="logo"/>
            <a href="/">{props.button}</a>
        </div>
    </div>
    )
}