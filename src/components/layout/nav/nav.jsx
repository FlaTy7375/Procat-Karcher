import { StyledNav } from "./style"
import Socials from "./socials"
import MainHeaderNav from "./main-nav"
import Logo from "../../../assets/images/logo.png";
import Menu from "../../../assets/svg/menu.svg";

export default function Nav() {
    return (
    <StyledNav>
        <div className="logo-wrapper">
            <a href="logo">
                <img src={Logo} alt="logo" width="36" height="36"></img>
                <h2>ProKarcher</h2>
            </a>
        </div>
        <MainHeaderNav></MainHeaderNav>
        <Socials></Socials>
        <a className="menu-button" href="#menu"><img src={Menu} alt="menu" width="36" height="36"></img></a>
    </StyledNav>
    )
}