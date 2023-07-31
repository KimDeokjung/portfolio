import {useState, useEffect} from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "../../../style/project/ProjectModal.module.css";

import deleteBtn from "../../../images/deleteBtn_icon.png"
import one from "../../../images/modal/portfolio/1.png"
import two from "../../../images/modal/portfolio/2.png"
import three from "../../../images/modal/portfolio/3.png"
import four from "../../../images/modal/portfolio/4.png"
import five from "../../../images/modal/portfolio/5.png"

function PortfolioModal(props) {
    const [mainPageIndex, setMainPageIndex] = useState(0);
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
        {
            id: 3,
            img: three
        },
        {
            id: 4,
            img: four
        },
        {
            id: 5,
            img: five
        }
    ]

    const setSlide = (index) => {
        if(swiper){
            swiper.slideTo(index)
        }
    }

    useEffect(() => {
        setMainPageIndex(0)
    }, [props.isOpen])

    return (
        <div className={props.isOpen ? `${classes.openModal} ${classes.modal}` : classes.modal}>
            {props.isOpen ? (
                <section>
                    <div className={classes.content_area}>
                        <div className={classes.header}>
                            <div>

                            </div>
                            <div className={classes.title}>
                                Portfolio
                            </div>

                            <img className={classes.deleteBtn} src={deleteBtn} onClick={props.modalHandler.bind(this, 0)} />
                        </div>

                        <div className={classes.content}>
                            <div className={classes.top_content}>
                                <div className={classes.left_content}>
                                    <div className={classes.swiper_area}>
                                        <Swiper
                                            effect={"fade"}
                                            autoplay={{
                                                delay: 30000,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            onSlideChange={(e) => setMainPageIndex(e.activeIndex)}
                                            modules={[Navigation, Autoplay, Pagination]}
                                            className="mySwiper"
                                            loop={false}
                                            onSwiper={setSwiper}
                                        >
                                            {page.map(content => (
                                                <SwiperSlide key={content.id}>
                                                    <img className={classes.page_img} key={content.id} src={content.img}/>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                    <div className={classes.project_area}>
                                        <span>
                                            프로젝트 목적
                                        </span>
                                        <span>
                                            제가 진행한 다양한 프로젝트를 포트폴리오 용도로 정리하기 위해 수행한 프로젝트입니다. 이를 통해 포트폴리오를 보시는 분들에게 제가 어떤 개발자인지에 대해 조금이라도 알려드리고자 합니다.
                                        </span>
                                    </div>

                                    <div className={classes.fun_area}>
                                        <span>
                                            주요 기능 ( ✔ = My Work )
                                        </span>
                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 0 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 0)}>
                                                { mainPageIndex === 0 ? "▼" : "▶"} About ✔
                                            </span>
                                            <span className={mainPageIndex === 0 ? classes.active_fun_list : classes.hide_area}>
                                                저에대한 인적사항이 포함되어 있습니다. GitHub와 Velog링크를 통해 더욱 더 자세히 볼 수 있습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 1 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 1)}>
                                                { mainPageIndex === 1 ? "▼" : "▶"} Skill ✔
                                            </span>
                                            <span className={mainPageIndex === 1 ? classes.active_fun_list : classes.hide_area}>
                                                제가 사용할 수 있는 기술들을 카테고리 별로 분류하여 점수를 매겼습니다.
                                                <br/><br/>
                                                Swiper을 사용하여 만들었습니다. 상단 카테고리를 클릭하거나 마우스를 이용해 화면을 넘길 수 있습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 2 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 2)}>
                                                { mainPageIndex === 2 ? "▼" : "▶"} Projects ✔
                                            </span>
                                            <span className={mainPageIndex === 2 ? classes.active_fun_list : classes.hide_area}>
                                                대학시절부터 제가 진행했던 프로젝트들을 정리했습니다. View More을 통해 상세내용을 확인할 수 있습니다.
                                                <br/><br/>
                                                Swiper을 사용하여 만들었습니다. Skill과 같은 디자인을 사용하면 두개의 영역을 구분하는데 문제가 생길 것 같아 디자인을 바꿨습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 3 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 3)}>
                                                { mainPageIndex === 3 ? "▼" : "▶"} Career ✔
                                            </span>
                                            <span className={mainPageIndex === 3 ? classes.active_fun_list : classes.hide_area}>
                                                제가 실제로 다녔던 회사와 진행했던 업무에 대해서 간략하게 설명 했습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 4 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 4)}>
                                                { mainPageIndex === 4 ? "▼" : "▶"} Contact ✔
                                            </span>
                                            <span className={mainPageIndex === 4 ? classes.active_fun_list : classes.hide_area}>
                                                저에게 개인적으로 연락을 남기고 싶으시면 제 메일에 이메일을 보낼 수 있습니다.
                                                <br/><br/>
                                                emailjs를 사용하였습니다.
                                            </span>
                                        </div>
                                    </div>

                                    <div className={classes.skill_area}>
                                        <span>
                                            사용 기술
                                        </span>
                                        <span>⦁ React</span>
                                        <span>⦁ Swiper</span>
                                        <span>⦁ EmailJS</span>
                                    </div>


                                    <div className={classes.project_area}>
                                        <span>
                                            느낌점과 기술 선정 이유
                                        </span>
                                        <span>
                                            저는 주로 Back End 기술을 중심으로 능력을 발전시켰습니다. 초기에는 기존에 있는 포트폴리오 툴을 사용하여 내용을 채워넣을까도 고려하였으나, 저에게 맞는 개인적인 포트폴리오 사이트를 스스로 만들고자 결심하였습니다.<br/><br/>

                                            기술스택으로 React를 사용한 이유는 컴포넌트 구조 때문입니다. 포트폴리오에는 Skill과 Project등 공통된 부분이 많이 포함됩니다. 이를 공용 컴포넌트로 개발하게 되면 정보를 깔끔하게 유지할 수 있어서 더 나은 사용자 경험을 제공할 수 있다고 판단하였습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.right_area}>
                                    <div className={classes.right_content}>
                                        <span>회고록</span>

                                        <div className={ classes.active_detail } onClick={setSlide.bind(this, 1)}>
                                            <span>디자인</span>
                                            <span>
                                                포트폴리오를 혼자서 디자인하며, 개발하는 것이 가장 어려웠습니다. 대학시절부터 재직 시절까지 정해진 디자인에 대해서만 개발을 진행하거나 Bootstrap 등을 사용하였는데 다양한 화면 비율과 가독성을 높이는 디자인을 찾기가 힘들었습니다.
                                                <br/><br/>
                                                다양한 사람들의 포트폴리오를 참고하며 적용하였고, 1차적으로 완성된 포트폴리오를 주변 지인들에게 보여주며 조언을 얻었고 그걸 적용해 완성하게 되었습니다.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.btn_area}>
                                <div className={classes.link_btn} onClick={() => window.open('https://github.com/KimDeokjung/portfolio', '_blank')}>Source</div>
                                <div className={classes.link_btn} onClick={() => window.open('https://info.ejrwnd.com/', '_blank')}>Demo</div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default PortfolioModal;
