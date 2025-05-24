import { StyledMain } from "./style";
import { Title } from "./style";
import { StyledMainWrapper } from "./style";
import { MainInfo } from "./style";
import Button from "../../ui/button/button";
import Card from "../../ui/card/card";
import { CardWrapper } from "./style";
import Avatar from "../../../assets/images/avatar.png";
import { useModal } from "../../app/context-modal";

export default function Main() {
  const { setModalClass, setBookingClass } = useModal();

  return (
    <StyledMain id="main">
      <StyledMainWrapper>
        <div className="main-container">
          <MainInfo>
            <Title>Прокат Karcher</Title>
            <p>
              Прокат моющей техники Karcher в Столине – арендуйте мощное
              оборудование для идеальной чистоты. Удобно, быстро и по доступной
              цене!
            </p>
            <Button className="main-button" onClick={setBookingClass}>Бронировать</Button>
          </MainInfo>
          <Card className="main-comment">
            <div className="comment-wrapper">
              <div className="comment-author">
                <img src={Avatar} alt="avatar" width="64" height="64" />
                <h2>Алёна</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </Card>
        </div>
        <Card className="main-card">
          <CardWrapper>
            <p>Доп. Услуги</p>
            <h2>Уборка и чистка авто!</h2>
            <Button className="card-button" onClick={setModalClass}>Подробнее</Button>
          </CardWrapper>
        </Card>
      </StyledMainWrapper>
    </StyledMain>
  );
}