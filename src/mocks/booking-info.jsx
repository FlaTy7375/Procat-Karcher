import Card from "../components/ui/card/card";
import Technique1 from "../assets/images/karcher-puzzi.png";
import Technique2 from "../assets/images/karcher-easy-sc3.png";
import Service from "../assets/images/main-image.png"

export const bookingInfo = [
  {
    id: 1,
    content: (
      <>
        <Card className="select-card card1">
        <img className="select-img" src={Technique1} alt="изображение Karcher Puzzi 8/1 C" />
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
        <img className="select-img" src={Technique2} alt="изображение Karcher SC 3 EasyFix" />
        <div className="card-wrapper">
            <h1 className="select-title">Karcher SC 3 EasyFix</h1>
            <p className="select-description">
                Karcher SC 3 EasyFix – компактный пароочиститель для очистки твердых
                поверхностей без химии. Нагревается за 30 секунд, оснащен резервуаром
                1 л для непрерывной работы. Удаляет до 99,999% вирусов и 99,99%
                бактерий. Компактный и удобный в использовании.
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
        <div className="card-wrapper">
            <h1 className="select-title">Уборка и чистка авто!</h1>

            <p className="select-description">
            Верните своему авто идеальную чистоту с техникой Karcher! Мы
            предлагаем профессиональную химчистку салона и мойку кузова для
            автомобилей всех размеров – от компактных легковых машин до просторных
            бусов.
            <br />
            <br />
            Наши сотрудники используют мощные моющие пылесосы и пароочистители
            Karcher, чтобы удалить даже самые стойкие загрязнения, сохранив
            материалы в отличном состоянии. Уточните стоимость для вашего авто и
            наслаждайтесь чистотой без лишних хлопот!
            </p>
        </div>
        </Card>
      </>
    ),
  },
];
