import Adv1 from "../assets/images/adv1.png"
import Adv2 from "../assets/images/adv2.png"
import Adv3 from "../assets/images/adv3.png"

export const slides = [
    {
        id: 1,
        content: (
          <>
            <img src={Adv3} alt="advantage" draggable="false" />
            <h2 className="advantages-title">Первая помощь</h2>
            <p>
              При получении техники наши сотрудники проведут полный инструктаж и покажут,
              как пользоваться оборудованием.
            </p>
          </>
        )
    },
    { 
        id: 2, 
        content: (
          <>
            <img src={Adv2} alt="advantage" draggable="false" />
            <h2 className="advantages-title">Подбор химии</h2>
            <p>
              Не стоит бегать по магазинам в поисках химии, мы сами подберем её к моющему
              пылесосу для решения вашей задачи.
            </p>
          </>
        )
    },
    {
        id: 3, 
        content: (
          <>
            <img src={Adv1} alt="advantage" draggable="false" />
            <h2 className="advantages-title">Реферальная система</h2>
            <p>
              Приведите друга, который арендует у нас технику Karcher, и получите скидку
              5 рублей на следующую аренду!
            </p>
          </>
        )
    },
];