import { StyledFooter } from "./style";
import { FooterWrapper } from "./style";
import Button from "../../ui/button/button";
import Logo from "../../../assets/images/logo.png"
import InstLogo from "../../../assets/svg/inst.svg"
import TgLogo from "../../../assets/svg/telegram.svg"
import CallLogo from "../../../assets/svg/call.svg"

export default function Footer() {
    return (
        <StyledFooter>
            <FooterWrapper>
            <div className="logo-container">
                <div className="footer-logo">
                    <img src={Logo} alt="logo" width="64" height="64" />
                    <h1>ProKarcher</h1>
                </div>
                <p>Аренда моющей техники Karcher в Столине. Подбор химии и аксессуаров и профессиональная химчистка!</p>
                <article>RU</article>
            </div>
            <div className="footer-socials">
                <h2>Связаться с нами</h2>
                <div className="social-list">
                    <a href="inst"><img src={InstLogo} alt="inst-logo" width="48" height="48"/></a>
                    <a href="inst"><img src={TgLogo} alt="inst-logo" width="48" height="48"/></a>
                    <a href="inst"><img src={CallLogo} alt="inst-logo" width="48" height="48"/></a>
                </div>
            </div>
            <div className="footer-book">
                <h2>Твой ход к чистоте:</h2>
                <Button className="book-button">Бронировать</Button>
                <article>prokarcher © all right reserve</article>
            </div>
            </FooterWrapper>
        </StyledFooter>
    )
}