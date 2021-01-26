import React from 'react'

export default function CaseStudy(props){
    return(
    <div className="case-study">
        <div><img src={props.image} alt="news"/></div>
        <p>{props.text}</p>
        <a href="/">{props.button}</a>
    </div>
    )
}