import {useState, useEffect} from "react";

import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "../../../style/project/ProjectModal.module.css";

import deleteBtn from "../../../images/deleteBtn_icon.png"
import one from "../../../images/modal/deliveryTogether/1.png"
import two from "../../../images/modal/deliveryTogether/2.png"
import three from "../../../images/modal/deliveryTogether/3.png"
import four from "../../../images/modal/deliveryTogether/4.png"
import five from "../../../images/modal/deliveryTogether/5.png"
import six from "../../../images/modal/deliveryTogether/6.png"
import seven from "../../../images/modal/deliveryTogether/7.png"
import eight from "../../../images/modal/deliveryTogether/8.png"

function DeliveryTogetherModal(props) {
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
        },
        {
            id: 6,
            img: six
        },
        {
            id: 7,
            img: seven
        },
        {
            id: 8,
            img: eight
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
                                Delivery Together
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
                                            modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
                                            navigation={true}
                                            mousewheel={true}
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
                                            대학교 4학년 때 졸업과제로 수행한 프로젝트입니다. 이 프로젝트는 대학생들이 흔히 마주치는 문제 중 하나인 배달비를 절약할 수 있는 방법을 고민하여 시작되었습니다. 주변에 같이 자취를하고 있는 동기들과 더 가까워지며 돈이 부족한 학우들이 식사 배달비를 아끼는 서비스를 개발하는 것이 저희의 목표였습니다.
                                        </span>
                                    </div>

                                    <div className={classes.fun_area}>
                                        <span>
                                            주요 기능 ( ✔ = My Work )
                                        </span>
                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 0 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 0)}>
                                                { mainPageIndex === 0 ? "▼" : "▶"} 지도
                                            </span>
                                            <span className={mainPageIndex === 0 ? classes.active_fun_list : classes.hide_area}>
                                                현재 위치를 기반으로 주변에 작성된 게시물들을 등록 메뉴에 대응되는 음식 아이콘으로 표시해줍니다.
                                                <br/><br/>
                                                사용자 위치정보를 기반으로 받아온 정보를 Google MapView를 통해 화면에 표시합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 1 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 1)}>
                                                { mainPageIndex === 1 ? "▼" : "▶"} 회원가입 ✔
                                            </span>
                                            <span className={mainPageIndex === 1 ? classes.active_fun_list : classes.hide_area}>
                                                사용자의 이메일, 생년월일, 국적, 성별, 비밀번호를 받아 새로운 회원을 등록합니다.
                                                <br/><br/>
                                                등록된 사용자는 Firebase에 정보를 추가하여 회원을 등록합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 2 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 2)}>
                                                { mainPageIndex === 2 ? "▼" : "▶"} 로그인 ✔
                                            </span>
                                            <span className={mainPageIndex === 2 ? classes.active_fun_list : classes.hide_area}>
                                                사용자가 이메일, 비밀번호를 입력하여 로그인을 시도합니다. 로그인이 된다면 지도 페이지로 이동됩니다.
                                                <br/><br/>
                                                비밀번호를 해싱키 암호화를 통해 암호화한 뒤 Firebase에 저장된 이메일 정보와 일치하는지 확인한 뒤 권한을 부여합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 3 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 3)}>
                                                { mainPageIndex === 3 ? "▼" : "▶"} 사용자 프로필
                                            </span>
                                            <span className={mainPageIndex === 3 ? classes.active_fun_list : classes.hide_area}>
                                                회원가입 할 때 사용한 회원정보를 표시해줍니다.
                                                <br/><br/>
                                                현재 로그인 된 유저의 정보를 Database에 요청합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 4 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 4)}>
                                                { mainPageIndex === 4 ? "▼" : "▶"} 게시물 등록
                                            </span>
                                            <span className={mainPageIndex === 4 ? classes.active_fun_list : classes.hide_area}>
                                                제목, 카테고리, 가격, 내용을 입력하여 새로운 게시물을 등록합니다.
                                                <br/><br/>
                                                게시글을 등록한 시점의 위치와 함께 Database에 저장합니다. 해당 위치를 저장하는 이유는 추후 지도에 표시하기 위해서입니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 5 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 5)}>
                                                { mainPageIndex === 5 ? "▼" : "▶"} 상대방 평가
                                            </span>
                                            <span className={mainPageIndex === 5 ? classes.active_fun_list : classes.hide_area}>
                                                당근마켓의 당근온도를 모티브하여 만들었습니다. 함께 배달을 시켜먹은 상대방에게 매너점수를 부여할 수 있습니다.
                                                <br/><br/>
                                                현재 평점을 받은 횟수와 새롭게 받은 평점까지 모두 연산하여 도출된 결과를 새롭게 Database에 업데이트 합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 6 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 6)}>
                                                { mainPageIndex === 6 ? "▼" : "▶"} 1:1 채팅 ✔
                                            </span>
                                            <span className={mainPageIndex === 6 ? classes.active_fun_list : classes.hide_area}>
                                                함께 배달을 시켜먹기를 희망하는 상대방에게 메신저를 보낼 수 있습니다.
                                                <br/><br/>
                                                Firebase Realtime Database를 사용하였으며, 채팅의 특성에 맞게 실시간으로 컴포넌트를 업데이트 시켜줍니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 7 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 7)}>
                                                { mainPageIndex === 7 ? "▼" : "▶"} 채팅방 ✔
                                            </span>
                                            <span className={mainPageIndex === 7 ? classes.active_fun_list : classes.hide_area}>
                                                이때까지 주고받은 사용자와의 메신저를 리스트 형식으로 마지막 대화를 보여줍니다. 만일 다른페이지에 있어도 헤더에 메신저가 왔다는 알림표시를 보냅니다.
                                                <br/><br/>
                                                Firebase Realtime Database를 사용하였으며, 현재까지 메신저를 주고받은 사용자들의 정보와, 마지막 메신저의 내용 그리고 시간을 저장해 표시합니다.
                                            </span>
                                        </div>
                                    </div>

                                    <div className={classes.skill_area}>
                                        <span>
                                            사용 기술
                                        </span>
                                        <span>⦁ React</span>
                                        <span>⦁ Spring Boot</span>
                                        <span>⦁ Firebase</span>
                                        <span>⦁ Google Map</span>
                                        <span>⦁ Redux</span>
                                    </div>


                                    <div className={classes.project_area}>
                                        <span>
                                            느낌점과 기술 선정 이유
                                        </span>
                                        <span>
                                            이 프로젝트는 제가 처음으로 경험한 협동 형태의 프로젝트 입니다. 기존에는 주로 개인적인 과제나 단순한 GUI 개발에 초점을 맞추었지만, 이번 기회를 통해 팀원들과 함께 아이디어를 공유하고 기획부터 개발까지 협력하여 프로젝트를 완성하였습니다. 이 경험은 저에게 매우 의미 있는 시간이었으며, 협업의 중요성과 팀원들과의 원활한 소통과 협력의 가치를 깨닫게 해주었습니다.
                                            <br/><br/>
                                            처음에는 Spring 프레임워크를 고려했지만, Front End 개발에서 React를 채택한 상황에서 Spring Boot를 사용하는 것이 더 적합하다고 판단했습니다. React는 컴포넌트 기반으로 웹 페이지를 구성하는데 용이한 프레임워크로, 이를 통해 UI를 재사용 가능한 구성 요소로 구축할 수 있습니다. 따라서 React와 Spring Boot를 함께 사용하면 서버와 클라이언트 간에 더 간편하게 데이터를 주고받을 수 있으며, 개발자들 간의 협업이 원활해집니다. <br/><br/>

                                            또한, Spring Boot를 사용함으로써 MVC 패턴의 개념에 대해 깊이 있는 학습을 할 수 있었습니다. Spring Boot는 강력한 기능과 구조적인 틀을 제공하여 개발자들이 손쉽게 프로젝트를 구축하고 관리할 수 있도록 도와줍니다. 이를 통해 소프트웨어 개발의 효율성을 높이고 유지보수를 더욱 간편하게 할 수 있었습니다. <br/><br/>

                                            두 프레임워크를 사용하면서 배운 가장 큰 점은 다양한 기술을 융합하여 프로젝트를 구성할 수 있다는 것이었습니다. Spring Boot와 React를 함께 사용하면 백엔드와 프론트엔드 간의 협업이 원활하게 이루어지며, 높은 수준의 효율성과 유연성을 얻을 수 있습니다. 이 프로젝트를 통해 저는 두 프레임워크를 조합하여 프로젝트를 개발하고 관리하는 방법을 배웠습니다. <br/><br/>
                                            또한, Firebase 서버를 활용하여 로그인 기능과 Database를 효과적으로 처리하였습니다. 이 과정에서 처음으로 NoSQL을 접하게 되었고, 기존의 SQL과의 차이점과 장단점에 대해 배울 수 있는 기회가 되었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.right_area}>
                                    <div className={classes.right_content}>
                                        <span>회고록</span>

                                        <div className={ mainPageIndex === 1 || mainPageIndex === 2 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 1)}>
                                            <span>비밀번호 암호화</span>
                                            <span>
                                                비밀번호를 Database에 어떤 식으로 저장해야 할지 고민했습니다. 수업 때 암호화 기법에 대해서는 많이 배웠지만 어떤 암호화를 사용해야 할지 바로 정하진 못했습니다.<br/><br/>
                                                비밀번호 암호화에 쓰이는 "대칭 키", "비대칭 키", "해싱"에 대하여 각각의 장, 단점을 분석하였습니다. "대칭 키" 암호화 기법은 속도가 빠르지만 암/복호화에 동일한 키를 사용한다는 점에서 보안에 문제가 있을 것 같았습니다. 또한 "비대칭 키"는 보안성은 비교적 좋았지만 암/복호화에 시간을 많이 쓴다는 단점이 있었습니다.<br/><br/>
                                                저는 앞서 말한 두 암호화의 장점을 가지고 있는 "해싱" 기법에서 SHA-256을 사용하여 비밀번호 암호화를 진행했습니다.
                                            </span>
                                        </div>

                                        <div className={ mainPageIndex === 6 || mainPageIndex === 7 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 6)}>
                                            <span>실시간 통신</span>
                                            <span>
                                                이 프로젝트를 하면서 가장 고민을 많이 했던 부분입니다. 실시간 통신 자체가 처음이라서 어떤 식으로 진행해야 할지 다양한 방식을 자료조사하고 개발을 진행했습니다.<br/><br/>
                                                통상적으로 실시간 통신을 할 때는 Soket을 많이 쓰지만 저는 Firebase Realtime Database의 성질과 기능을 이용하여 Database의 Chat 부분이 업데이트되면 Spring Boot 쪽으로 신호를 줘서 React 컴포넌트를 업데이트하는 형태로 해결하였습니다.<br/><br/>
                                                Firebase 공식 자료에서도 Realtime Database를 이용하여 채팅을 만드는 가이드가 있을 만큼 공식화된 기능이지만 Spring Boot를 거쳐서 처리하는 방식으로 개발하여 어려움이 많았습니다.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.btn_area}>
                                <div className={classes.link_btn} onClick={() => window.open('https://github.com/yu-capstone-design/delivery-together', '_blank')}>Source</div>
                                <div className={classes.link_btn} onClick={() => window.open('https://www.youtube.com/watch?v=OAZtWIabdJw', '_blank')}>Demo</div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default DeliveryTogetherModal;
