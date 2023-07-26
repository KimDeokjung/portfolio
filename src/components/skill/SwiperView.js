import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import classes from "../../style/skill/SwiperView.module.css";

function SwiperView() {
    return (
        <Swiper>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
        </Swiper>
    );
}

export default SwiperView;
