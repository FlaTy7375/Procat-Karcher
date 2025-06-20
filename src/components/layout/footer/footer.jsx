import { StyledFooter } from "./style";
import { FooterWrapper } from "./style";
import Button from "../../ui/button/button";
import Logo from "../../../assets/images/logo.png"
import InstLogo from "../../../assets/svg/inst.svg"
import TgLogo from "../../../assets/svg/telegram.svg"
import CallLogo from "../../../assets/svg/call.svg"
import { useModal } from "../../app/context-modal";

export default function Footer() {
    const { setBookingClass, setOption } = useModal();

    return (
        <StyledFooter>
            <FooterWrapper>
            <div className="logo-container">
                <div className="footer-logo">
                    <img src={Logo} alt="karcher-logo" width="64" height="64" />
                    <h1>ProKarcher</h1>
                </div>
                <p>Аренда моющей техники Karcher в Столине. Подбор химии и аксессуаров и профессиональная химчистка!</p>
                <article>RU</article>
            </div>
            <div className="footer-socials">
                <h2>Связаться с нами</h2>
                <div className="social-list">
                    <a href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src={InstLogo} alt="inst-logo" width="48" height="48" rel="noopener noreferrer"/></a>
                    <a href="https://t.me/Inna_Evt" target="_blank" rel="noopener noreferrer"><img src={TgLogo} alt="telegram-logo" width="48" height="48" rel="noopener noreferrer"/></a>
                    <a href="tel:+375292781620" target="_blank" rel="noopener noreferrer"><img src={CallLogo} alt="phone-logo" width="48" height="48" rel="noopener noreferrer"/></a>
                </div>
            </div>
            <div className="footer-book">
                <h2>Твой ход к чистоте:</h2>
                <Button className="book-button" onClick={() => {setOption(0); setBookingClass()}}>Бронировать</Button>
                <article>prokarcher © all right reserve</article>
            </div>
            </FooterWrapper>
        </StyledFooter>
    )
}