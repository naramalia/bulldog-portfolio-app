import React from 'react';

export default function About() {
    return (
        <div className = "about-container">
            <div className = "title-line">BullDog is an ACTOR...</div>

            <div className="subtitle-line">A consumate professional of stage & screen.</div>
                
            <div className="feature-container">
                <div className="feature-category">
                    <div className="feature-line">BullDog in FILM</div>   
                        <p>Leading roles in the 24 Hour Film Festival and the Hawaii Film Festival ...</p>
                            <p>film titles go here</p>
                </div>
                
                <div className="feature-category">
                    <div className="feature-line">BullDog on TELEVISION</div>
                        <p>Featured role on the television series 'Hawaii'</p>
                        <p><span>Commercials</span> and <span>PSA's</span> for numerous local Hawaii companies including ...</p>
                            <p>local company listings/logos go here</p>
                </div>   
                
                <div className="feature-category">
                    <div className="feature-line">BullDog on STAGE</div>
                        <p>Mr. Seamus Bartley at Evermore Park</p>
                        <p>An extensive resume of credits from Shakespeare to World Premieres</p>
                            <p>link to resume goes here</p>
                </div>

                <div className="feature-category">
                    <div className="feature-line">BullDog VOICE</div>
                        <p>Appearances on Hawaii Public Radio and in commerical applications</p>
                </div>
                
            </div>

        </div>
    );
}
