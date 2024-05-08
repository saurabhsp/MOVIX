import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaJsSquare,
    FaJs,
    FaCode,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" href="">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Explore endless movie magic with Movix: Your gateway to cinematic bliss! 🎬✨ #MovieMarathon #DiscoverMovix
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/saurabhsp" target="_blank" className="icon">
                        <FaGithub />
                    </a>
                    <a href="https://replit.com/@SAURABHPAKHALE" target="_blank" className="icon">
                        <FaCode />
                    </a>
                    <a href="https://www.instagram.com/_saurabh_pakhale_/" target="_blank" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
