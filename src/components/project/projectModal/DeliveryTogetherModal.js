import {useState, useEffect} from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import classes from "../../../style/project/projectModal/DeliveryTogetherModal.module.css";
import deleteBtn from "../../../images/deleteBtn_icon.png"

import DeliveryTogether from "../../../images/DeliveryTogether.png"
import one from "../../../images/modal/deliveryTogether/1.jpg"
import two from "../../../images/modal/deliveryTogether/2.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Skill from "../../skill/Skill";

function DeliveryTogetherModal(props) {
    const [mainSkillIndex, setMainSkillIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const page = [
        {
            id: 1,
            img: one
        },
        {
            id: 2,
            img: two
        },
    ]

    return (
        <div className={props.isOpen ? `${classes.openModal} ${classes.modal}` : classes.modal}>
            {props.isOpen ? (
                <section>
                    <div className={classes.header}>
                        <div>

                        </div>
                        <div className={classes.title}>
                            Delivery Together
                        </div>

                        <img className={classes.deleteBtn} src={deleteBtn} onClick={props.modalHandler.bind(this, 0)} />
                    </div>

                    <div className={classes.aaa}>
                        <div className={classes.bbb}>

                            <div className={classes.hhh}>
                                <Swiper
                                    effect={"fade"}
                                    autoplay={{
                                        delay: 10000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    onSlideChange={(e) => setMainSkillIndex(e.activeIndex)}
                                    modules={[Navigation, Autoplay, Pagination]}
                                    className="mySwiper"
                                    loop={false}
                                    onSwiper={setSwiper}
                                >
                                    {page.map(content => (
                                        <SwiperSlide>
                                            <img className={classes.eee} key={content.id} src={content.img}/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className={classes.ccc}>
                                <span>
                                    프로젝트 목적
                                </span>
                                <span>
                                    "DeliveryTogether"란 함께 배달 시키자는 뜻으로 사용자의 현재 위치를 기반으로 주변에 같이 배달을 시켜 배달 비, 최소 주문 금액을 절약 시킬 사람을 찾아주는 서비스입니다.
                                </span>
                            </div>

                            <div className={classes.fff}>
                                <div>
                                    주요 기능
                                </div>
                                <div className={classes.ggg}>
                                    <span>
                                        로그인
                                    </span>
                                    <span>
                                        ㄴ미아러ㅣㅁ나얼
                                    </span>
                                </div>
                                <div>
                                    회원가입
                                </div>
                                <div>
                                    지도
                                </div>
                                <div>
                                    게시물 등록
                                </div>
                                <div>
                                    사용자 프로필
                                </div>
                                <div>
                                    프로필 변경
                                </div>
                                <div>
                                    사용자 채팅
                                </div>
                            </div>
                        </div>
                        <div className={classes.ddd}>
                            <div>
                                <span>
                                    ㅁㄴㅇㄹ
                                </span>
                                <span>
                                    ㅁㄴㅇㄹ
                                </span>
                                <span>
                                    ㅁㄴㅇㄹ
                                </span>
                                <span>
                                    ㅁㄴㅇㄹ
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default DeliveryTogetherModal;
