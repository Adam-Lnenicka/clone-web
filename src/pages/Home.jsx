import React, {useState} from 'react'
import Card from '../components/Card.jsx'
import Innovation from '../components/Innovation.jsx'
import News from '../components/News.jsx'
import CaseStudy from '../components/CaseStudy.jsx'
import Header from '../components/Header.jsx'




export default function Home(){
    
    const display =<div className="show-more"><div><div>Show more</div>
        <i class="fas fa-chevron-right fa-rotate-90"></i></div></div>
    const [show, setShow] = useState(false)
    const [button, setButton] = useState(display)

    const onClick = () => setShow(true)
    const onClick2 = () => setButton(null)

   

  


    return(
        <div className="Home">

            <Header/>

            <div className="banner">
                
                    <img src="https://www.cxpartners.co.uk/ui/img/homepage/hero-lg.png" alt="creative"/>
                    <div className="banner-info">
                        <h1>People first in a digital world</h1>
                        <p>cxpartners helps the world’s best companies to become truly customer-centred and thrive.</p>
                        <div><div><a href="/">about us</a></div></div>
                    </div>
                    
               
            </div>
            <div className="inner-padding">

                <div className="introduction">
                    <h2>The design innovation partner</h2>
                    <div className="introduction-paragraph"><p>We believe that what's best for the customer is best for the business. </p></div>
                    <p>If you're a customer champion or digital leader in a complex organisation or tightly regulated market, we can help you to:</p>
                </div>
                <div className="innovations">

                    <Innovation image="https://www.cxpartners.co.uk/ui/img/homepage/our-approach-1-bw-280.png"
                                text="Understand your customers like never before"
                    />

                    <Innovation image="https://www.cxpartners.co.uk/ui/img/homepage/our-approach-2-bw-280.png"
                                text="Reimagine your products and services"
                    />

                    <Innovation image="https://www.cxpartners.co.uk/ui/img/homepage/our-approach-3-bw-280.png"
                                text="Bring new and better services to market"
                    />

                    <Innovation image="https://www.cxpartners.co.uk/ui/img/homepage/our-approach-4-bw-280.png"
                                text="Become a truly customer-centred organisation"
                    />

                </div>  


                    

                <h2>Our work</h2>
                    <Card   image="https://www.cxpartners.co.uk/ui/img/homepage/richard-pash-xl.jpg" 
                    
                            text="How do you cut through complexity and find answers that are simple, elegant, and powerful? This book will show you."
                            fullAuthor="RICHARD PASH"
                            place="MARKETING DIRECTOR, ZURICH INSURANCE UK"
                            button="read the case study"
                            />

                <h2>Ideas & Resources</h2>
                <Card   image="https://www.cxpartners.co.uk/ui/img/ebc/ebc-brochure-xl-1x.jpg" 
                            subtitle="our books"
                            title2="Simple and Usable"
                            text="How do you cut through complexity and find answers that are simple, elegant, and powerful? This book will show you."
                            button="read the case study"
                            />

                <div className="news-section">
                    <News   title="InsurTech 2021: customer experience remains a key battleground"
                            author="Gabriela Isas"
                            date="10 NOV 2020"
                            text="In 2018 we took a snapshot of the tech startups aiming to disrupt the insurance industry. 
                            Our updated InsurTech matrix reveals how much has really changed since then, and what we can expect in 2021."
                    />

                    <News   title="Adding friction to help people make better decisions"
                            author="MARK SKINNER"
                            date="21 JUL 2020"
                            text="It’s common to try and make experiences as easy as possible, but sometimes, the best way to help customers make better decisions is to slow them down."
                    />
                </div>


                <div>
                    <div onClick={onClick2}><div onClick={onClick} >{button}</div></div>

                    { show ? 
                    <div className="show-more2">
                        <CaseStudy  image="https://www.cxpartners.co.uk/ui/img/homepage/coop-banner-750.jpg"
                                    text="The secret to designing a better online supermarket? Fewer features."
                                    button="Read the case study"
                        />   

                        <CaseStudy  image="https://www.cxpartners.co.uk/ui/img/homepage/bcc-banner-750.jpg"
                                    text="How did Bristol City Council transform its services? By listening to people."
                                    button="Read the case study"
                        />   
                          
                         
                    </div>
                     : null }
                </div>

                <div clasName="expand"></div>
                <div className="case-study-section">
                        <CaseStudy  image="https://www.cxpartners.co.uk/ui/img/homepage/coop-banner-750.jpg"
                                    text="The secret to designing a better online supermarket? Fewer features."
                                    button="Read the case study"
                        />   

                        <CaseStudy  image="https://www.cxpartners.co.uk/ui/img/homepage/bcc-banner-750.jpg"
                                    text="How did Bristol City Council transform its services? By listening to people."
                                    button="Read the case study"
                        />  
                </div>

                <div>





                    <Card   image="https://www.cxpartners.co.uk/ui/img/homepage/simple-and-usable-xl-1x.jpg" 
                            subtitle="our books"
                            title1="Simple and Usable"
                            text="How do you cut through complexity and find answers that are simple, elegant, and powerful? This book will show you."
                            author="RICHARD PASH"

                            button="read the case study"
                            />
                </div>

                <div className="news-section">
                <News   title="Learning from lockdown: accelerating change without creating a crisis"
                        author="GILES COLBORNE"
                        date="9 JUL 2020"
                        text="Was it just crisis management, or was there more to the rapid pace of digtial transformation during lockdown? We've been panning for gold and have found a few nuggets."
                />

                <News   title="Serverless technology and the rise of the frontend engineer"
                        author="DAVE MARTIN"
                        date="26 JUN 2020"
                        text="Serverless computing is a game-changer - delivering huge cost-savings and scalability. You can plug gaps in your service offering by employing Serverless microservices quickly and cheaply."
                />
                </div>
                </div>
        </div>
    )
}