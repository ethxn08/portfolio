import React from 'react'
import CoverVideo from "../../media/Cover.mp4"
import Typewriter from "typewriter-effect"

function Cover() {

      
    return (
        <div className="cover-container">
            <video className="video" src={CoverVideo} autoPlay loop muted />
            <Typewriter
            options={{
                strings: ['Ethan Alfaro Figueira', 'Frontend Dev | UX & UI Designer','Game Dev | Ethical Hacker'],
                autoStart: true,
                loop: true,
                className:"name" 
        }}
             />
            
            </div>
            
    )
}

export default Cover
