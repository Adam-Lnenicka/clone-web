import React from 'react'

export default function News(props){
    return(
        <div className="news">
            <div className="news-description sections">
                <h3>{props.title}</h3>
                <div>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            <div className="news-description sections"><p>{props.text}</p></div>
        </div>
    )
}