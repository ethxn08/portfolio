import React from "react";
import git from "../../assets/icons/git.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
function Header() {
  return (
    <div className="header">
      <div className="header-background">
        <h1>Frontend Developer</h1>
        <h3>Ethan Alfaro Figueira</h3>
        <div className="header-icons">
          <img src={git} alt="git" />
          <img src={instagram} alt="linkedin" />
          <img src={linkedin} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default Header;
