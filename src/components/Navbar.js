import React from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';


const Navbar = ({ navbarLinks }) => {
    return (
        <nav className="navbar">
            <span className="navbar__logo">travell</span>
            <ul className="navbar__list">
                {navbarLinks.map(item => {
                    return <li className="navbar__item" key={item.title}>
                        <Link to={item.url} smooth={true} duration={500} className="navbar__link" >
                            {item.title}
                        </Link>
                    </li>
                })}
            </ul>

        </nav>
    )
};

export default Navbar;
