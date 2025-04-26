import { StyledAdvantages } from "./style";
import SectionName from "../../ui/section-name/section-name"
import AdvantagesSlider from "./advantages-slider";
import React, { useEffect, useState } from "react";
import 'swiper/css';

export default function Advantages() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsPhone(window.matchMedia("(max-width: 767px)").matches);
        }

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    return (
        <StyledAdvantages id="advantages">
            <SectionName className="advantages-name">Преимущества</SectionName>
            <AdvantagesSlider isPhone={isPhone}></AdvantagesSlider>
        </StyledAdvantages>
    )
}