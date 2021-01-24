import React from 'react'

export default function News(props){
    return(
        <div className="news">
            <div>
                <h2>{props.title}</h2>
                <div>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            <p>{props.text}</p>
        </div>
    )
}