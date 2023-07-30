import {useState, useEffect} from "react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import classes from "../../style/skill/Main.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Skill from "./Skill"

function Main() {
    const [mainSkillIndex, setMainSkillIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const languagesContents = [
        {
            id: 1,
            name: "Java",
            level: 60
        },
        {
            id: 2,
            name: "Python",
            level: 80
        },
        {
            id: 3,
            name: "JavaScript",
            level: 70
        },
        {
            id: 4,
            name: "HTML5",
            level: 70
        },
        {
            id: 5,
            name: "Node.js",
            level: 70
        },
        {
            id: 6,
            name: "C",
            level: 50
        }
    ]

    const frameworkContents = [
        {
            id: 7,
            name: "Spring",
            level: 50
        },
        {
            id: 8,
            name: "Spring Boot",
            level: 60
        },
        {
            id: 9,
            name: "Express",
            level: 80
        },
        {
            id: 10,
            name: "React",
            level: 70
        },
        {
            id: 11,
            name: "Cordova",
            level: 60
        },
        {
            id: 12,
            name: "Flask",
            level: 40
        },
    ]

    const serverContents = [
        {
            id: 13,
            name: "Tomcat",
            level: 40
        },
        {
            id: 14,
            name: "Nginx",
            level: 70
        },
        {
            id: 15,
            name: "MySql",
            level: 60
        },
        {
            id: 16,
            name: "MongoDB",
            level: 70
        },
        {
            id: 17,
            name: "Firebase",
            level: 60
        },
    ]

    const etcContents = [
        {
            id: 18,
            name: "Git",
            level: 80
        },
        {
            id: 19,
            name: "AWS",
            level: 70
        },
        {
            id: 20,
            name: "Docker",
            level: 50
        },
        {
            id: 21,
            name: "GCP",
            level: 60
        },
        {
            id: 22,
            name: "VMware",
            level: 40
        }

    ]

    const setSlide = (index) => {
        if(swiper){
            swiper.slideTo(index)
        }
    }

    return (
        <div>
            <div className={classes.aaa}>
                <span className={classes.bbb}>Skill</span>
            </div>

            <div className={classes.ddd}>
                <div className={mainSkillIndex === 0 ? classes.eee : classes.fff} onClick={setSlide.bind(this, 0)}>
                    <span>Languages</span>
                </div>
                <div className={mainSkillIndex === 1 ? classes.eee : classes.fff} onClick={setSlide.bind(this, 1)}>
                    <span>Framework</span>
                </div>
                <div className={mainSkillIndex === 2 ? classes.eee : classes.fff} onClick={setSlide.bind(this, 2)}>
                    <span>Server / DB</span>
                </div>
                <div className={mainSkillIndex === 3 ? classes.eee : classes.fff} onClick={setSlide.bind(this, 3)}>
                    <span>Etc</span>
                </div>
            </div>

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
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                loop={false}
                onSwiper={setSwiper}
            >
                <SwiperSlide>
                    <div className={classes.ccc}>
                        {languagesContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={0}/>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.ccc}>
                        {frameworkContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={1}/>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.ccc}>
                        {serverContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex}  mappingIndex={2}/>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.ccc}>
                        {etcContents.map(content => (
                            <Skill key={content.id} content={content} nowIndex={mainSkillIndex} mappingIndex={3}/>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Main;
