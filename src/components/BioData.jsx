import React from "react";
import "../App.css";
import Avatar from "../image/profilePic.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const Github = <FontAwesomeIcon icon={faGithubSquare} />;
const Twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const BioData = () => {
  return (
    <div className="bioData">
      <header>
        <div className="avatar">
          <img className="avatarImg" src={Avatar} alt="avatar" />
        </div>
        <div className="name">
          <span>Sohag_Hosen</span>
        </div>
      </header>
      <span style={{ marginTop: "7px" }}>Computer Science and Engineering (<b>CSE</b>)
      </span>
      <div className="socialIcons">
        <li className="socialItem">
          <i>{Facebook}</i>
        </li>
        <li className="socialItem">
          <i>{Twitter}</i>
        </li>
        <li className="socialItem">
          <i>{Linkedin}</i>
        </li>
        <li className="socialItem">
          <i>{Github}</i>
        </li>
      </div>
      <footer className="footer">
        <span>&#169;2021</span>
      </footer>
    </div>
  );
};
export default BioData;
