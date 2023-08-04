import {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation} from "swiper/modules";

import ProjectCard from "./ProjectCard";
import DeliveryTogetherModal from "./projectModal/DeliveryTogetherModal";
import ImsModal from "./projectModal/ImsModal";
import PlaygroundModal from "./projectModal/PlaygroundModal";
import DeatsModal from "./projectModal/DeatsModal";
import PortfolioModal from "./projectModal/PortfolioModal";

import classes from "../../style/project/Main.module.css";

import DeliveryTogether from "../../images/DeliveryTogether.png"
import Playground from "../../images/Playground.png"
import Portfolio from "../../images/Portfolio.png"
import Deats from "../../images/Deats.png"
import Ims from "../../images/Ims.png"

function Main() {
    const [modalOpen, setModalOpen] = useState(0)

    const projects = [
        {
            id: 1,
            img: DeliveryTogether,
            name: "Delivery Together",
            period: "2021.03 ~ 2021.11",
            tech: "Spring Boot, React, Firebase",
            member: "개발자 2명",
            works: [
                {
                    id: 1,
                    content: "로그인 및 회원가입"
                },
                {
                    id: 2,
                    content: "로그인 인증 및 관리"
                },
                {
                    id: 3,
                    content: "실시간 채팅"
                }
            ]
        },
        {
            id: 2,
            img: Ims,
            name: "IMS",
            period: "2022.01 ~ 2022.03",
            tech: "ExpressJS, HTML, MongoDB",
            member: "개발자 2명, 디자이너 2명",
            works: [
                {
                    id: 1,
                    content: "프로젝트 페이지"
                },
                {
                    id: 2,
                    content: "프로젝트 뷰 페이지"
                },
                {
                    id: 3,
                    content: "리뷰 및 이슈 기능"
                }
            ]
        },
        {
            id: 3,
            img: Playground,
            name: "Playground",
            period: "2022.03 ~ 2022.06",
            tech: "ExpressJs, TypeScript, MongoDB",
            member: "개발자 2명",
            works: [
                {
                    id: 1,
                    content: "유튜브 게임"
                },
                {
                    id: 2,
                    content: "하키 게임"
                },
                {
                    id: 3,
                    content: "서버 배포"
                }
            ]
        },
        {
            id: 4,
            img: Deats,
            name: "Deats",
            period: "2023.03 ~ 진행 중",
            tech: "NestJS, React, MySQL",
            member: "개발자 3명, 디자이너 2명",
            works: [
                {
                    id: 1,
                    content: "로그인 및 회원가입"
                },
                {
                    id: 2,
                    content: "커뮤니티 페이지 개발"
                },
                {
                    id: 3,
                    content: "서버 연결 및 배포"
                }
            ]
        },
        {
            id: 5,
            img: Portfolio,
            name: "Portfolio",
            period: "2023.07",
            tech: "React",
            member: "개발자 1명",
            works: [
                {
                    id: 1,
                    content: "디자인"
                },
                {
                    id: 2,
                    content: "포트폴리오 페이지 개발"
                },
                {
                    id: 3,
                    content: "서버 배포"
                }
            ]
        }
    ]

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <span className={classes.header_text}>Projects</span>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                navigation={true}
                mousewheel={true}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                <div className="container">

                    {projects.map(project =>
                        <SwiperSlide  key={project.id}>
                            <ProjectCard
                                key={project.id}
                                index={project.id}
                                img={project.img}
                                name={project.name}
                                period={project.period}
                                tech={project.tech}
                                member={project.member}
                                works={project.works}
                                modalHandler={setModalOpen}
                            /> </SwiperSlide>)} </div>
            </Swiper>

            <DeliveryTogetherModal isOpen={modalOpen === 1} modalHandler={setModalOpen}/>
            <ImsModal isOpen={modalOpen === 2} modalHandler={setModalOpen}/>
            <PlaygroundModal isOpen={modalOpen === 3} modalHandler={setModalOpen}/>
            <DeatsModal isOpen={modalOpen === 4} modalHandler={setModalOpen}/>
            <PortfolioModal isOpen={modalOpen === 5} modalHandler={setModalOpen}/>
        </div>
    );
}

export default Main;
