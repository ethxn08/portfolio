import React from 'react'
import Carrousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./Slide"
function Slider() {
    return (
        <div className="carrousel-container">
            <div className="carrousel-title">
                <h2>My Projects</h2>
            </div>

            <Carrousel 
                arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    800: {
                        slidesPerPage: 1,
                        arrows: false,
                        itemWidth: 250
                    }
                }}
            />
        </div>

    )
}

export default Slider
