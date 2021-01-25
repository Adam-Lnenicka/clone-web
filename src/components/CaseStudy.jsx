import React from 'react'

export default function CaseStudy(props){
    return(
    <div className="case-study">
        <img src={props.image}/>
        <p>{props.text}</p>
        <a href="/">{props.button}</a>
    </div>
    )
}