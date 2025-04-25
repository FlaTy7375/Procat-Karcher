import { StyledAdvantages } from "./style";
import { AdvantagesWrapper } from "./style";
import SectionName from "../../ui/section-name/section-name"
import Card from "../../ui/card/card";
import Adv1 from "../../../assets/images/adv1.png"
import Adv2 from "../../../assets/images/adv2.png"
import Adv3 from "../../../assets/images/adv3.png"

export default function Advantages() {
    return (
        <StyledAdvantages id="advantages">
            <SectionName className="advantages-name">Преимущества</SectionName>
            <AdvantagesWrapper>
                <Card className="advantages-card">
                    <img src={Adv1} alt="advantage"/>
                    <h2 className="advantages-title">Реферальная система</h2>
                    <p>Приведите друга, который арендует у нас технику Karcher, и получите скидку 10 рублей на следующую аренду!</p>
                </Card>
                <Card className="advantages-card">
                    <img src={Adv2} alt="advantage"/>
                    <h2 className="advantages-title">Подбор химии</h2>
                    <p>Не стоит бегать по магазинам в поисках химии, мы сами подберем её к моющему пылесосу для решения вашей задачи.</p>
                </Card>
                <Card className="advantages-card">
                    <img src={Adv3} alt="advantage"/>
                    <h2 className="advantages-title">Химчистка без забот</h2>
                    <p>Уточните стоимость работ по химчистке вашей мебели, ковров, матрасов и наш сотрудник произведет ее самостоятельно!</p>
                </Card>
            </AdvantagesWrapper>
        </StyledAdvantages>
    )
}