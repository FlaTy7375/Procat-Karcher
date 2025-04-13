import { StyledNav } from "./style"
import Socials from "./socials"
import MainHeaderNav from "./main-nav"
import Logo from "../../../assets/images/logo.png";

export default function Nav() {
    return (
    <StyledNav>
        <div className="logo-wrapper">
            <a href="logo">
                <img src={Logo} alt="logo" width="48" height="48"></img>
                <h2>ProKarcher</h2>
            </a>
        </div>
        <MainHeaderNav></MainHeaderNav>
        <Socials></Socials>
    </StyledNav>
    )
}