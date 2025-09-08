import { StyledMainNav } from "./style";
import { useAuth } from "../../app/AuthContext.jsx";

export default function MainHeaderNav() {
    const { isAuthenticated, logout } = useAuth();

    return(
        <StyledMainNav>
            <a href="#main">Главная</a>
            <a href="#technique">Техника</a>
            <a href="#advantages">Преимущества</a>
            <a href="#comments">Отзывы</a>
            <a href="#services">Доп. Услуги</a>
            { isAuthenticated ? <button className="nav-logout" onClick={logout}>Выйти</button>
            : <></>}
        </StyledMainNav>
    )
}