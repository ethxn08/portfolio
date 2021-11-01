import React from 'react'
import CoverVideo from "../../media/Cover.mp4"
function Cover() {
    return (
        <div className="cover-container">
            <video className="video" src={CoverVideo} autoPlay loop muted />
            <h1>Ethan Alfaro Figueira</h1>
            <p>Frontend Dev | UX & UI Designer | Game Dev | Ethical Hacker</p>
        </div>
    )
}

export default Cover
