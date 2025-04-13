import { StyledMain } from "./style";
import { Title } from "./style";
import { StyledMainWrapper } from "./style";
import { MainInfo } from "./style";
import Button from "../../ui/button/button";
import Card from "../../ui/card/card";
import { CardWrapper } from "./style";
import Avatar from "../../../assets/images/avatar.png"

export default function Main() {
  return (
    <StyledMain>
      <StyledMainWrapper>
        <MainInfo>
          <Title>Прокат Karcher</Title>
          <p>
            Прокат моющей техники Karcher в Столине – арендуйте мощное
            оборудование для идеальной чистоты. Удобно, быстро и по доступной
            цене!
          </p>
          <Button className="main-button">Бронировать</Button>
        </MainInfo>
        <Card className="main-card">
            <CardWrapper>
                <p>Доп. Услуги</p>
                <h2>Доверьте химчистку нам!</h2>
                <Button className="card-button">Подробнее</Button>
            </CardWrapper>
        </Card>
      </StyledMainWrapper>
      <Card className="main-comment">
        <div>
        <img src={Avatar} alt="avatar" width="64" height="64"/>
        <h2>Алёна</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
      </Card>
    </StyledMain>
  );
}
