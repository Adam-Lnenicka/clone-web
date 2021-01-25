import React from 'react'

export default function Footer(){
    return(
        <div className="Footer">
            <div className="main-footer">
                <div className="locations">
                    <div>
                        <h5>London Studio</h5>
                        <p>Cairo Studios</p>
                        <p>4 Nile Street</p>
                        <p>Shoreditch</p>
                        <p>London, N1 7RF</p>
                        <p>United Kingdom</p>
                        <a href="/"><span>+44 (0) 207 062 7081</span></a>

                    </div>

                    <div>
                        <h5>Bristol Studio</h5>
                        <p>2 College Square</p>
                        <p>Anchor Road</p>
                        <p>Bristol, BS1 5UE</p>
                        <p>United Kingdom</p>
                        <a href="/"><span>+44 (0) 117 930 3530</span></a>
                    </div>
                    
                </div>
                <div>
                    <h5>New business</h5>
                    <a href="/"><span>hello@cxpartners.co.uk</span></a>

                    <h5>Newsletter</h5>
                    <form>
                        <label for="email">Your email:</label><br/>
                 
                            <input type="text" id="email"></input><br/>
                            <button>subscribe</button>
                            <div className="form-info"><p>By entering your email, you agree to our <span>general privacy policy</span>.</p></div>

                      
                    </form>

                </div>
            </div>
            <div className="lower-footer">
                <div>
                    <a href="/">OUR BOOKS</a>
                    <a href="/">UX RESOURCES</a>
                    <a href="/">TERMS OF USE</a>
                    <a href="/">ACCESSIBILITY STATEMENT</a>
                </div>
                <div className="icons">
                    <div className="icon1"><i class="fab fa-linkedin-in"></i></div>
                    <div className="icon1"><i class="fab fa-twitter"></i></div>
                    <div className="icon2"><i class="fab fa-slideshare fa-2x"></i></div>
                </div>
            </div>



        </div>
    )
}