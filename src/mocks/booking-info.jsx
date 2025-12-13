import Card from "../components/ui/card/card";
import Technique1 from "../assets/images/karcher-puzzi.png";
import Technique1_2 from "../assets/images/technique1-2.jpg";
import Technique2 from "../assets/images/karcher-sc4-deluxe.png";
import Technique2_2 from "../assets/images/karcher-sc4_2.jpg";
import Service from "../assets/images/karcher-k5-fc.png"
import Service2 from "../assets/images/karcher_k_5_2.jpg"

export const bookingInfo = [
  {
    id: 1,
    content: (
      <>
        <Card className="select-card card1">
        <img className="select-img" src={Technique1} alt="изображение Karcher Puzzi 8/1 C" />
        <img className="select-img2" src={Technique1_2} alt="изображение Karcher Puzzi 8/1 C" />
        <div className="card-wrapper">
            <h1 className="select-title">Karcher Puzzi 8/1 C</h1>
            <p className="select-description">
                Моющий пылесос Karcher Puzzi 8/1 C предназначен для влажной уборки
                ковров, мебели и салонов автомобилей. Обеспечивает глубокую чистку с
                минимальной остаточной влажностью, чтобы поверхности быстро высыхали.
                Компактный и удобный в использовании.
            </p>
        </div>
        </Card>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <Card className="select-card card2">
        <img className="select-img" src={Technique2} alt="изображение Karcher SC 4 Deluxe" />
        <img className="select-img2" src={Technique2_2} alt="изображение Karcher SC 4 Deluxe" />
        <div className="card-wrapper">
            <h1 className="select-title">Karcher SC 4 Deluxe</h1>
            <p className="select-description">
                Профессиональный пароочиститель для гигиеничной очистки твердых поверхностей без применения химии.
                Идеально подходит для полов, плитки, кухонных поверхностей, сантехники, окон.
            </p>
        </div>
        </Card>
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <Card className="select-card card3">
        <img className="select-img" src={Service} alt="изображение услуги" />
        <img className="select-img2" src={Service2} alt="изображение услуги" />
        <div className="card-wrapper">
            <h1 className="select-title">Karcher K 5 Full Control</h1>

            <p className="select-sescription">
              Мощная мойка высокого давления для профессиональной, быстрой и бережной очистки автомобилей.
              Относится к аппаратам среднего класса, рассчитанным на высокие нагрузки. 
              <br />
              <br />
              Полный контроль над каждым аспектом работы: от давления до нанесения химии делает её идеальным
              инструментом для удаления стойкой грязи, следов насекомых, соли и других загрязнений с кузова,
              колес и подвески авто без риска повреждения лакокрасочного покрытия.
            </p>
        </div>
        </Card>
      </>
    ),
  },
];
