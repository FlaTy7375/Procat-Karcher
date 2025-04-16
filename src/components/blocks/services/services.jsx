import { StyledServices } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import Services1 from "../../../assets/images/main-image.png";

export default function Services() {
  return (
    <StyledServices>
      <SectionName className="services-name">Дополнительные услуги</SectionName>
      <Card className="services-card">
        <img src={Services1} alt="services" width="875" height="875" />
        <div className="services-wrapper">
          <h2 className="services-title">Доверьте химчистку нам!</h2>
          <p>
            Не тратьте время и силы на сложную уборку – наши профессионалы
            сделают всё за вас! С использованием мощной техники Karcher мы
            проведем глубокую химчистку ковров, мягкой мебели, матрасов прямо у
            вас дома.<br/><br/> Наши сотрудники подберут подходящие средства и насадки,
            чтобы эффективно удалить даже стойкие пятна и загрязнения, сохранив
            при этом материалы в идеальном состоянии. Уточните стоимость работ,
            выберите удобное время, и мы гарантируем сияющий результат без
            вашего участия!
          </p>
          <Button className="services-button">Заказать</Button>
        </div>
      </Card>
    </StyledServices>
  );
}
