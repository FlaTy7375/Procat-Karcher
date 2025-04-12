import { StyledNav } from "./style"
import Socials from "./socials"
import MainNav from "./main-nav"
import myImage from "../../../assets/images/logo.png";

export default function Nav() {
    return (
    <StyledNav>
        <div className="logo-wrapper">
            <a href="logo">
                <img src={myImage} alt="logo" width="48" height="48"></img>
                <h2>ProKarcher</h2>
            </a>
        </div>
        <MainNav></MainNav>
        <Socials></Socials>
    </StyledNav>
    )
}