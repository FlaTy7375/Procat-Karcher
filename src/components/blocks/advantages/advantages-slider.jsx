import React, { useRef, useState } from "react";
import Card from "../../ui/card/card";
import { slides } from "../../../mocks/slides";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as SliderButton } from "../../../assets/svg/slider-button.svg"
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AdvantagesSlider ({isPhone}) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    return (
        <>
        <Swiper 
        pagination={{
            type: 'fraction',
        }}
        modules={[Pagination, Navigation]}
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
            // Связываем кнопки после инициализации Swiper
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
            // Обновляем состояние на основе активного слайда
            setIsFirstSlide(swiper.isBeginning);
            setIsLastSlide(swiper.isEnd);
        }}
        >
        {slides.map((slide) => {
            return isPhone ?
            <SwiperSlide>
                <Card className="advantages-card" key={slide.id}>{slide.content}</Card>
            </SwiperSlide>
            :
            <Card className="advantages-card" key={slide.id}>{slide.content}</Card>
        })}

        </Swiper>
            <div className="slider-nav--container">
                <button className="slide-prev" ref={prevRef} style={{ opacity: isFirstSlide ? 0.4 : 1 }}><SliderButton></SliderButton></button>
                <button className="slide-next" ref={nextRef} style={{ opacity: isLastSlide ? 0.4 : 1 }}><SliderButton></SliderButton></button>
            </div>
        </>
    )
}