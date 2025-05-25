import React, { useState } from "react";
import { StyledTechnique } from "./style"
import { TechniqueWrapper } from "./style"
import TechniqueAbout from "./technique-about"
import SectionName from "../../ui/section-name/section-name"
import { CardsWrapper } from "./style"
import Card from "../../ui/card/card"
import Button from "../../ui/button/button"
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg"
import { useModal } from "../../app/context-modal";

export default function Technique() {
    const [btn, setBtn] = useState(false);
    const [Modal, setModal] = useState("");
    const { setBookingClass, setOption } = useModal();

    return (
        <>
        <TechniqueAbout BtnFirst={btn} display={Modal} setDisplay={setModal} setBookingClass={setBookingClass} setOption={setOption}/>
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
                            <Button className="technique-button" onClick={() => {setOption(1); setBookingClass()}}>Бронировать</Button>
                            <Button className="technique-info" onClick={() => {setBtn(true); setModal("modal-show"); document.body.style.overflow = "hidden"}}><InfoIcon/></Button>
                        </div>
                    </div>
                </Card>
                <Card className="technique-card">
                <div className="card-wrapper">
                        <h2>Karcher SC 3 EasyFix</h2>
                        <p>Пароочиститель – аппарат для экологичной уборки, уничтожает бактерии горячим паром. Отлично подходит для полов и мебели.</p>
                        <article>30 руб/сутки</article>
                        <div className="button-wrapper">
                            <Button className="technique-button" onClick={() => {setOption(2); setBookingClass()}}>Бронировать</Button>
                            <Button className="technique-info" onClick={() => {setBtn(); setModal("modal-show"); document.body.style.overflow = "hidden"}}><InfoIcon/></Button>
                        </div>
                    </div>
                </Card>
            </CardsWrapper>
            </TechniqueWrapper>
        </StyledTechnique>
        </>
    )
}