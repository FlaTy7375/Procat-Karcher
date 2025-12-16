import React, { useState, useEffect } from "react";
import { StyledTechnique, TechniqueWrapper, CardsWrapper } from "./style"
import TechniqueAbout from "./technique-about"
import SectionName from "../../ui/section-name/section-name"
import Card from "../../ui/card/card"
import Button from "../../ui/button/button"
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg"
import { useModal } from "../../app/context-modal";

export default function Technique() {
    const [btn, setBtn] = useState(false);
    const [isTechniqueAboutVisible, setIsTechniqueAboutVisible] = useState(false);
    const { 
        setBookingClass, 
        setOption
    } = useModal();
    
    useEffect(() => {
        if (isTechniqueAboutVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isTechniqueAboutVisible]); 

    const showTechniqueAbout = (btnType) => {
      setBtn(btnType);
      setIsTechniqueAboutVisible(true);
    };

    const hideTechniqueAbout = () => {
      setIsTechniqueAboutVisible(false);
    };
    
    const handleBookingClick = () => {
      setBookingClass();
    };

    return (
        <>
        <TechniqueAbout
          BtnFirst={btn}
          display={isTechniqueAboutVisible ? "modal-show" : ""}
          hideModal={hideTechniqueAbout}
          setBookingClass={setBookingClass}
          setOption={setOption}
        />
        <StyledTechnique id="technique">
            <TechniqueWrapper>
            <SectionName className="technique-name">Наша Техника</SectionName>
            <CardsWrapper>
                <Card className="technique-card">
                    <div className="card-wrapper">
                        <h2>Karcher Puzzi 8/1 C</h2>
                        <p>Моющий пылесос – мощный аппарат для профессиональной уборки. Идеально подходит для чистки ковров, мебели и салонов авто.</p>
                        <article>50 руб/сутки</article>
                        <div className="button-wrapper">
                            <Button className="technique-button" onClick={() => {setOption(1); handleBookingClick()}}>Бронировать</Button>
                            <Button className="technique-info" onClick={() => showTechniqueAbout(true)}><InfoIcon/></Button>
                        </div>
                    </div>
                </Card>
                <Card className="technique-card">
                <div className="card-wrapper">
                        <h2>Karcher SC 4 Deluxe</h2>
                        <p>Профессиональный пароочиститель для гигиеничной очистки твердых поверхностей без применения химии. Идеально подходит для полов, плитки, кухонных поверхностей, сантехники, окон.</p>
                        <article>50 руб/сутки</article>
                        <div className="button-wrapper">
                            <Button className="technique-button" onClick={() => {setOption(2); handleBookingClick()}}>Бронировать</Button>
                            <Button className="technique-info" onClick={() => showTechniqueAbout(false)}><InfoIcon/></Button>
                        </div>
                    </div>
                </Card>
            </CardsWrapper>
            </TechniqueWrapper>
        </StyledTechnique>
        </>
    )
}