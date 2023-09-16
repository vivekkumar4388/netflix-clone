import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);

        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img
                className="nav__avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
                alt="Netflix Logo" />

        </div>
    )
}

export default Nav;
