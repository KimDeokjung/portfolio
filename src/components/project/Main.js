import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation,Mousewheel} from "swiper/modules";

import ProjectCard from "./ProjectCard";
import classes from "../../style/project/Main.module.css";

import DeliveryTogether from "../../images/DeliveryTogether.png"
import Ims from "../../images/Ims.png"
import Playground from "../../images/Playground.png"
import Deats from "../../images/Deats.png"
import Portfolio from "../../images/Portfolio.png"

function Main() {

    const projects = [
        {
            id: 100,
            img: DeliveryTogether,
            name: "Delivery Together",
            period: "2021.03 ~ 2021.11",
            tech: "Spring Boot, React, Firebase",
            member: "",
            works: [
                {
                    id: 1,
                    content: "로그인"
                },
                {
                    id: 2,
                    content: "aaa"
                }
            ]
        },
        {
            id: 101,
            img: Ims,
            name: "IMS",
            period: "2022.01 ~ 2022.03",
            tech: "Express Js, HTML, MongoDB",
            member: "",
            works: [
                {
                    id: 1,
                    content: "aaa"
                },
                {
                    id: 2,
                    content: "aaa"
                }
            ]
        },
        {
            id: 102,
            img: Playground,
            name: "Playground",
            period: "2022.03 ~ 2022.06",
            tech: "Express Js, Typescript, MongoDB",
            member: "",
            works: [
                {
                    id: 1,
                    content: "aaa"
                },
                {
                    id: 2,
                    content: "aaa"
                }
            ]
        },
        {
            id: 103,
            img: Deats,
            name: "Deats",
            period: "2023.03 ~ 2023.07",
            tech: "NestJS, React, MySQL",
            member: "",
            works: [
                {
                    id: 1,
                    content: "aaa"
                },
                {
                    id: 2,
                    content: "aaa"
                }
            ]
        },
        {
            id: 104,
            img: Portfolio,
            name: "Portfolio",
            period: "2023.07",
            tech: "React",
            member: "",
            works: [
                {
                    id: 1,
                    content: "aaa"
                },
                {
                    id: 2,
                    content: "aaa"
                }
            ]
        }
    ]


    return (
        <div className={classes.ccc}>
            <div className={classes.aaa}>
                <span className={classes.bbb}>Projects</span>
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
                modules={[EffectCoverflow,Navigation,Mousewheel]}
                className="mySwiper"
            >
                <div className="container">

                    {projects.map(project =>
                        <SwiperSlide  key={project.id}>
                            <ProjectCard
                                key={project.id}
                                img={project.img}
                                name={project.name}
                                period={project.period}
                                tech={project.tech}
                                member={project.member}
                                works={project.works}
                            /> </SwiperSlide>)} </div>
            </Swiper>
        </div>
    );
}

export default Main;
