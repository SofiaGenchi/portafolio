import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80){
            header.classList.add("scroll-header");
        }else {
            header.classList.remove("scroll-header");
        }
    })

    const [Toggle, showMenu] = useState(false);
    // const [activeNav, setActiveNav] = useState("/");

    const navegar = useNavigate();
    return(
        <header className="header">
            <nav className="nav container">
                <a onClick={() => navegar('/')} className="nav__logo">Sofia</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a onClick={() => navegar('/')} className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a onClick={() => navegar('/about')} className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a onClick={() => navegar('/skills')} className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a onClick={() => navegar('/projects')} className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a onClick={() => navegar('/contact')} className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;