import { StyledSocials } from "./style";
import { ReactComponent as Instagram } from "../../../assets/svg/inst.svg";
import { ReactComponent as Call} from "../../../assets/svg/call.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/telegram.svg";

export default function Socials() {
    return(
        <StyledSocials>
            <a href="inst"><Instagram></Instagram></a>
            <a href="tg"><Telegram></Telegram></a>
            <a href="call"><Call></Call></a>
        </StyledSocials>
    )
}