import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";
import {ThemeContext} from "../../contexts/ThemeContext";
import {HeaderStyle} from "./HeaderStyle";


export function Header() {
    const theme = useContext(ThemeContext)
    return (
        <>
            <header className={HeaderStyle.root(theme)}>
                <div className="container">
                    <div className={HeaderStyle.headerWrapper()}>
                        <div className={HeaderStyle.headerLogo()}>PukiGroup</div>
                        <div className={HeaderStyle.headerNav()}>

                            <NavLink
                                className={HeaderStyle.navLink(theme)}
                                to="/"> Home</NavLink>

                            <NavLink
                                className={HeaderStyle.navLink(theme)}
                                to="/about"> About</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
