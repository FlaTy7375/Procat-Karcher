import Adv1 from "../assets/images/adv1.webp";
import Adv2 from "../assets/images/adv2.webp";
import Adv3 from "../assets/images/adv3.webp";

export const slides = [
  {
    id: 1,
    kind: "mascot",
    tag: "Инструктаж на выдаче",
    title: "Первая помощь",
    description:
      "При получении техники наши сотрудники проведут полный инструктаж и покажут, как пользоваться оборудованием.",
    speech: "Покажу, как включается\u00A0— это проще, чем кажется",
    image: Adv3,
    imageAlt: "Мастер-помощник с пылесосом и в жёлтых перчатках",
    width: 413,
    height: 413,
  },
  {
    id: 2,
    kind: "chemistry",
    tag: "Подбор средств",
    title: "Подбор химии",
    description:
      "Не стоит бегать по магазинам в поисках химии, мы сами подберём её к моющему пылесосу для решения вашей задачи.",
    image: Adv2,
    imageAlt: "Профессиональные средства и колбы для подбора химии",
    width: 680,
    height: 1020,
  },
  {
    id: 3,
    kind: "coupon",
    tag: "Купон на скидку",
    title: "Бонусы за отзыв",
    discount: "−10%",
    description:
      "За отзыв с фото «до/после» в Instagram — щётка на перфоратор на сутки бесплатно, а всем, кто оставляет отзыв, — 10% скидка на следующую аренду.",
    bonusLine: "Щётка на перфоратор на сутки — бесплатно за отзыв с фото в Instagram",
    image: Adv1,
    imageAlt: "Бонусы и скидка за отзыв",
    width: 960,
    height: 960,
  },
];
