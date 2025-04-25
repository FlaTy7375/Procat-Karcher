import { StyledSocials } from "./style";
import { ReactComponent as Instagram } from "../../../assets/svg/inst.svg";
import { ReactComponent as Call} from "../../../assets/svg/call.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/telegram.svg";

export default function Socials() {
    return(
        <StyledSocials>
            <a href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><Instagram></Instagram></a>
            <a href="https://t.me/Inna_Evt" target="_blank" rel="noopener noreferrer"><Telegram></Telegram></a>
            <a href="tel:+375292781620" target="_blank" rel="noopener noreferrer"><Call></Call></a>
        </StyledSocials>
    )
}