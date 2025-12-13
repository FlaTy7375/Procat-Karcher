import React, { useState, useEffect, useRef } from "react";
import { StyledNav } from "./style"
import Socials from "./socials"
import MainHeaderNav from "./main-nav"
import Logo from "../../../assets/images/logo.png";
import Menu from "../../../assets/svg/menu.svg";
import { useAuth } from "../../app/AuthContext.jsx";
import { ReactComponent as LogoutImg } from "../../../assets/svg/logout.svg";

export default function Nav() {
    const [menu, setMenu] = useState("");
    const menuRef = useRef(null);

    const { isAuthenticated, logout } = useAuth();

    useEffect(() => {
        const handleClick = (event) => {
          // Проверяем, что клик произошел вне меню
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenu("")
        }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const addMenuClass = () => {
        if (menu === "") {
            setMenu("nav-opened");
        } else {
            setMenu("");
        } 
        
    }

    return (
    <StyledNav ref={menuRef} className={menu}>
        <div className="logo-wrapper">
            <a href="/">
                <img src={Logo} alt="logo" width="36" height="36"></img>
                <h2>ProKarcher</h2>
            </a>
        </div>
        <MainHeaderNav></MainHeaderNav>
            <>
                {isAuthenticated ? (
                    <div className="unlog-wrapper">
                        <button className="unlog-button" onClick={logout}>
                        <LogoutImg className="unlog-img"></LogoutImg>
                        </button>
                        <span className="unlog-avatar">ВЫ</span>
                    </div>
                ) : (
                    <Socials></Socials>
                )}
            </>
        <button className="menu-button" onClick={addMenuClass}><img src={Menu} alt="menu" width="36" height="36"></img></button>
    </StyledNav>
    )
}