import {useState} from "react";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Skill from "./Skill"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from "../../style/skill/Main.module.css";

function Main() {
    const [mainSkillIndex, setMainSkillIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const languagesContents = [
        {
            id: 1,
            name: "Java",
            level: 3
        },
        {
            id: 2,
            name: "Python",
            level: 2
        },
        {
            id: 3,
            name: "JavaScript",
            level: 3
        },
        {
            id: 5,
            name: "Node.js",
            level: 3
        },
        {
            id: 6,
            name: "C",
            level: 1
        }
    ]

    const frameworkContents = [
        {
            id: 9,
            name: "Express",
            level: 3
        },
        {
            id: 10,
            name: "React",
            level: 1
        },
        {
            id: 11,
            name: "Cordova",
            level: 2
        },
        {
            id: 12,
            name: "Flask",
            level: 2
        },
        {
            id: 7,
            name: "Spring / SpringBoot",
            level: 2
        },
    ]

    const serverContents = [
        {
            id: 13,
            name: "Tomcat",
            level: 2
        },
        {
            id: 14,
            name: "Nginx",
            level: 3
        },
        {
            id: 15,
            name: "MySql",
            level: 2
        },
        {
            id: 16,
            name: "MongoDB",
            level: 3
        },
        {
            id: 17,
            name: "Firebase",
            level: 2
        },
    ]

    const devContents = [
        {
            id: 18,
            name: "Git",
            level: 3
        },
        {
            id: 19,
            name: "AWS",
            level: 2
        },
        {
            id: 20,
            name: "Docker",
            level: 1
        },
        {
            id: 21,
            name: "GCP",
            level: 2
        },
        {
            id: 22,
            name: "VMware",
            level: 1
        }

    ]

    const setSlide = (index) => {
        if(swiper){
            swiper.slideTo(index)
        }
    }

    return (
        <div>
            <div className={classes.header}>
                <span className={classes.header_text}>Skill</span>
            </div>

            <div className={classes.category}>
                <div className={mainSkillIndex === 0 ? classes.category_active : classes.category_default} onClick={setSlide.bind(this, 0)}>
                    <span>Languages</span>
                </div>
                <div className={mainSkillIndex === 1 ? classes.category_active : classes.category_default} onClick={setSlide.bind(this, 1)}>
                    <span>Framework</span>
                </div>
                <div className={mainSkillIndex === 2 ? classes.category_active : classes.category_default} onClick={setSlide.bind(this, 2)}>
                    <span>Server / DB</span>
                </div>
                <div className={mainSkillIndex === 3 ? classes.category_active : classes.category_default} onClick={setSlide.bind(this, 3)}>
                    <span>DevOps</span>
                </div>
            </div>

            <Swiper
                effect={"fade"}
                autoplay={{
                    delay: 10000000000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={(e) => setMainSkillIndex(e.activeIndex)}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                loop={false}
                onSwiper={setSwiper}
            >
                <SwiperSlide>
                    <div className={classes.skill_area}>
                        {languagesContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={0}/>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.skill_area}>
                        {frameworkContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={1}/>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.skill_area}>
                        {serverContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={2}/>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.skill_area}>
                        {devContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={3}/>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={classes.level_area}>
                <span className={classes.level_1}>Level 1 : 학습을 통해 간단한 프로젝트 만들어 보며 실습한 경험이 존재합니다.</span>
                <span className={classes.level_2}>Level 2 : 실전에서 직접 사용해보며 숙련도 증진시켰습니다. </span>
                <span className={classes.level_3}>Level 3 : 실전에서 사용한 경험이 존재하며, 개인적인 학습을 통해 지속적으로 발전시켰습니다.</span>
            </div>

        </div>
    );
}

export default Main;
