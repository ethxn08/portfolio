import React from 'react'

function Navbar({isScrolling}) {
    const toTheTop = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>Dev Portfolio</div>
        </div>
    )
}

export default Navbar
