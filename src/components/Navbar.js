import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';


const Navbar = ({ navbarLinks }) => {

    const [menuClicked, setMenuCklicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuCklicked(!menuClicked);
    }

    return (
        <nav className="navbar">
            <Link to="hero" smooth={true} duration={500} className="navbar__logo">travell</Link>
            {menuClicked ?
                <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
                :
                <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
            }

            <ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active"}>
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
