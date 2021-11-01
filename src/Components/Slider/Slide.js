import React from "react";
const slideInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "Employee Management ",
        desc: "[ PHP ] Employee Management",
        url: "https://github.com/ethxn08/php-emplyee-management.git"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Rick and Morty",
        desc: "[ React & API] Rick and Morty Page",
        url: "https://github.com/ethxn08/react-rick-morty.git"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "Page of Memes",
        desc: "[ React & API] Gifs Page",
        url: "https://github.com/ethxn08/assembler-tech-challenge.git"
    }
]

const slides = slideInfo.map((slide) => (
    <div className="slide-container">
        <a href={slide.url} target="_blank">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
        </a>
    </div>
))

export default slides