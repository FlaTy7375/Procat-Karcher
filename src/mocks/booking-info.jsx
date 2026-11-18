import Card from "../components/ui/card/card";
import Technique1 from "../assets/images/karcher-puzzi.webp";
import Technique2 from "../assets/images/karcher-sc4-deluxe.webp";
import Service from "../assets/images/karcher-k5-fc.webp";

export const bookingInfo = [
  {
    id: 1,
    content: (
      <Card className="select-card card1">
        <div className="select-img-wrap">
          <img
            className="select-img"
            src={Technique1}
            alt="Моющий пылесос Karcher Puzzi 8/1 C"
            width="534"
            height="463"
            loading="lazy"
          />
        </div>
        <div className="card-wrapper">
          <h3 className="select-title">Karcher Puzzi 8/1 C</h3>
          <p className="select-description">
            Моющий пылесос Karcher Puzzi 8/1 C предназначен для влажной уборки
            ковров, мебели и салонов автомобилей. Обеспечивает глубокую чистку с
            минимальной остаточной влажностью, чтобы поверхности быстро высыхали.
            Компактный и удобный в использовании.
          </p>
        </div>
      </Card>
    ),
  },
  {
    id: 2,
    content: (
      <Card className="select-card card2">
        <div className="select-img-wrap">
          <img
            className="select-img"
            src={Technique2}
            alt="Пароочиститель Karcher SC 4 Deluxe"
            width="960"
            height="960"
            loading="lazy"
          />
        </div>
        <div className="card-wrapper">
          <h3 className="select-title">Karcher SC 4 Deluxe</h3>
          <p className="select-description">
            Профессиональный пароочиститель для гигиеничной очистки твёрдых
            поверхностей без применения химии. Идеально подходит для полов,
            плитки, кухонных поверхностей, сантехники, окон.
          </p>
        </div>
      </Card>
    ),
  },
  {
    id: 3,
    content: (
      <Card className="select-card card3">
        <div className="select-img-wrap">
          <img
            className="select-img"
            src={Service}
            alt="Мойка высокого давления Karcher K 5 Full Control"
            width="960"
            height="700"
            loading="lazy"
          />
        </div>
        <div className="card-wrapper">
          <h3 className="select-title">Karcher K 5 Full Control</h3>
          <p className="select-description">
            Мощная мойка высокого давления для профессиональной, быстрой и
            бережной очистки автомобилей. Относится к аппаратам среднего класса,
            рассчитанным на высокие нагрузки.
            <br />
            <br />
            Полный контроль над каждым аспектом работы: от давления до нанесения
            химии делает её идеальным инструментом для удаления стойкой грязи,
            следов насекомых, соли и других загрязнений с кузова, колёс и
            подвески авто без риска повреждения лакокрасочного покрытия.
          </p>
        </div>
      </Card>
    ),
  },
];
