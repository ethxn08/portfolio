import React from 'react'
import se from "../../media/se.jpg"

function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me !</h3>
                <p>
                I consider myself a proactive, creative person with a lot of passion for her work.
                I love software development, engineering, fiddling with hardware, video game development, and ethical hacking.
                </p>
                <h3>Technologies that I master</h3>
                <p>
                    ReactJs | Node | PHP | MYSQL | MongoDb | JS | GitHub | Kali Linux & Linux Dependencies | C# | Html 5 | CSS | Sass | Webpack | Firebase | Unity | Networks | Assembly and maintenance of computer equipment
                </p>
            </div>
            <div className="about-img">
                <img src={se} alt="AboutMe" />
            </div>
        </div>
    )
}

export default About
