import {useState, useEffect} from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "../../../style/project/ProjectModal.module.css";

import deleteBtn from "../../../images/deleteBtn_icon.png"
import one from "../../../images/modal/deats/1.png"
import two from "../../../images/modal/deats/2.png"
import three from "../../../images/modal/deats/3.png"
import four from "../../../images/modal/deats/4.png"
import five from "../../../images/modal/deats/5.png"
import six from "../../../images/modal/deats/6.png"
import seven from "../../../images/modal/deats/7.png"
import eight from "../../../images/modal/deats/8.png"
import nine from "../../../images/modal/deats/9.png"
import ten from "../../../images/modal/deats/10.png"
import eleven from "../../../images/modal/deats/11.png"
import twelve from "../../../images/modal/deats/12.png"
import thirteen from "../../../images/modal/deats/13.png"

function DeatsModal(props) {
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
        },
        {
            id: 9,
            img: nine
        },
        {
            id: 10,
            img: ten
        },
        {
            id: 11,
            img: eleven
        },
        {
            id: 12,
            img: twelve
        },
        {
            id: 13,
            img: thirteen
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
                                Deats
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
                                            다니던 회사에서 임금체불로 인한 자진퇴사를 하고나서 같은 이유로 퇴사한 사람들과 함께 수행한 프로젝트입니다. 평소 급식카드에 대해 알고 있던 동료의 의견을 출발점으로 하여 기획이 시작되었습니다. 주요 타켓층이 아이들이라는 점을 고려하여, 아이들이 사용하기 편하고 직관적인 서비스를 개발하는 것이 저희의 목표였습니다.
                                        </span>
                                    </div>

                                    <div className={classes.fun_area}>
                                        <span>
                                            주요 기능 ( ✔ = My Work )
                                        </span>
                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 0 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 0)}>
                                                { mainPageIndex === 0 ? "▼" : "▶"} 메인페이지 ✔
                                            </span>
                                            <span className={mainPageIndex === 0 ? classes.active_fun_list : classes.hide_area}>
                                                    Deats의 메인페지이 입니다. 로그인이 된 상태라면 헤더 우측을 통해 로그인페이지로 이동 할 수 있습니다. 최근에 올린 공지사항이나 FAQ등을 메인페이지에서 간단하게 보여줍니다.
                                                    <br/><br/>
                                                    cookie에 저장된 jwt를 통해 로그인이 되어있는 사용자인지 아닌지 구분합니다. 로그인이된 사용자라면 Redux기능을 통해 store에 저장합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 1 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 1)}>
                                                { mainPageIndex === 1 ? "▼" : "▶"} 로그인 ✔
                                            </span>
                                            <span className={mainPageIndex === 1 ? classes.active_fun_list : classes.hide_area}>
                                                사용자가 이메일, 비밀번호를 입력하여 로그인을 시도합니다. 로그인이 된다면 메인페이지로 이동합니다.
                                                <br/><br/>
                                                비밀번호를 해싱키 암호화를 통해 암호화한 뒤 MySQL에 저장된 정보와 매칭이 된다면 cookie에 JWT형태의 토큰을 추가하여 로그인을 관리합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 2 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 2)}>
                                                { mainPageIndex === 2 ? "▼" : "▶"} 회원가입 ✔
                                            </span>
                                            <span className={mainPageIndex === 2 ? classes.active_fun_list : classes.hide_area}>
                                                사용자의 이메일, 비밀번호, 닉네임을 받아 새로운 회원을 등록합니다.
                                                <br/><br/>
                                                등록된 사용자는 MYSQL에 정보를 추가하여 회원을 등록합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 3 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 3)}>
                                                { mainPageIndex === 3 ? "▼" : "▶"} 공지 ✔
                                            </span>
                                            <span className={mainPageIndex === 3 ? classes.active_fun_list : classes.hide_area}>
                                                관리자가 올린 공지사항의 리스트를 카테고리, 제목, 일자의 내용을 포함한 리스트 형태로 표시합니다.
                                                <br/><br/>
                                                페이지네이션 기법을 통해 만들었습니다. 한 페이지에 보여지는 갯수는 9개로 페이지 위치를 계산해 데이터를 요청합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 4 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 4)}>
                                                { mainPageIndex === 4 ? "▼" : "▶"} 공지 (관리자) ✔
                                            </span>
                                            <span className={mainPageIndex === 4 ? classes.active_fun_list : classes.hide_area}>
                                                관리자 권한의 계정으로 접속 시 보이게되며 게시글 작성, 수정, 삭제 등의 작업을 수행할 수 있습니다.
                                                <br/><br/>
                                                로그인 할 때 유저권한을 받아온 뒤, admin계정일 경우 store에 해당 내용을 저장합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 5 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 5)}>
                                                { mainPageIndex === 5 ? "▼" : "▶"} 공지 디테일 ✔
                                            </span>
                                            <span className={mainPageIndex === 5 ? classes.active_fun_list : classes.hide_area}>
                                                관리자가 올린 공지사항의 세부 내용을 열람 가능합니다. 카테고리, 제목, 일자, 내용으로 구성되어 있습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 6 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 6)}>
                                                { mainPageIndex === 6 ? "▼" : "▶"} FAQ ✔
                                            </span>
                                            <span className={mainPageIndex === 6 ? classes.active_fun_list : classes.hide_area}>
                                                관리자가 올린 FAQ의 리스트를 카테고리, 질문, 답변의 내용을 포함한 리스트 형태로 표시합니다.
                                                <br/><br/>
                                                페이지네이션 기법을 통해 만들었습니다. 한 페이지에 보여지는 갯수는 10개로 페이지 위치를 계산해 데이터를 요청합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 7 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 7)}>
                                                { mainPageIndex === 7 ? "▼" : "▶"} FAQ (관리자) ✔
                                            </span>
                                            <span className={mainPageIndex === 7 ? classes.active_fun_list : classes.hide_area}>
                                                관리자 권한의 계정으로 접속 시 보이게되며 FAQ 작성, 수정, 삭제 등의 작업을 수행할 수 있습니다.
                                                <br/><br/>
                                                로그인 할 때 유저권한을 받아온 뒤, admin계정일 경우 store에 해당 내용을 저장합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 8 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 8)}>
                                                { mainPageIndex === 8 ? "▼" : "▶"} 1:1 문의 ✔
                                            </span>
                                            <span className={mainPageIndex === 8 ? classes.active_fun_list : classes.hide_area}>
                                                카테고리와 제목, 내용, 첨부파일을 관리자에게 보낼 수 있습니다. 해당 내용은 마이페이지에서 확인 가능합니다.
                                                <br/><br/>
                                                React에서 AWS S3로 파일을 직접 올리고 올리게 된 위치를 NestJS로 보내는 형식으로 첨부파일 업로드를 개발하였습니다. 싱글서버가 아닌 두개의 서버를 둔 입장에서 파일을 NestJS로 보내고 AWS S3에 올리는 방식은 불필요한 작업이라 판단하였기 때문입니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 9 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 9)}>
                                                { mainPageIndex === 9 ? "▼" : "▶"} 프로필 ✔
                                            </span>
                                            <span className={mainPageIndex === 9 ? classes.active_fun_list : classes.hide_area}>
                                                사용자의 프로필 정보를 수정할 수 있습니다. 프로필에 접근하기 위해서는 비밀번호를 다시 입력해야 합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 10 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 10)}>
                                                { mainPageIndex === 10 ? "▼" : "▶"} 스토어 검색 ✔
                                            </span>
                                            <span className={mainPageIndex === 10 ? classes.active_fun_list : classes.hide_area}>
                                                검색창에 찾고자하는 급식카드 가맹점을 입력하면 위치를 표시해줍니다.
                                                <br/><br/>
                                                대구광역시 Open API와 Python Beautifulsoup를 통해 MySQL에 미리 적재된 데이터를 기반으로 검색이 이루어집니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 11 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 11)}>
                                                { mainPageIndex === 11 ? "▼" : "▶"} 길찾기
                                            </span>
                                            <span className={mainPageIndex === 11 ? classes.active_fun_list : classes.hide_area}>
                                                출발지와 도착지를 입력하면 [대중교통, 자동차, 도보] 3가지 방법의 길을 보여줍니다. 클릭 시 지도에 이동해야하는 경로를 표시합니다.
                                                <br/><br/>
                                                경로를 찾는 방법은 네이버 지도 API를 사용하였습니다. 하지만 네이버 지도 API자체에서 Map에 경로를 표시하는 기능은 제공하지 않았기 때문에 크롤링을 통해 Pin정보를 받아와 지도에 표시합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 12 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 12)}>
                                                { mainPageIndex === 12 ? "▼" : "▶"} 정보 저장
                                            </span>
                                            <span className={mainPageIndex === 12 ? classes.active_fun_list : classes.hide_area}>
                                                사용자가 원하는 가게 혹은 길찾기에 대한 정보를 저장할 수 있습니다. 한번 저장한 내용은 별도의 검색 없이 바로 클릭으로 접근할 수 있습니다.
                                            </span>
                                        </div>
                                    </div>

                                    <div className={classes.skill_area}>
                                        <span>
                                            사용 기술
                                        </span>
                                        <span>⦁ NestJS</span>
                                        <span>⦁ Swagger</span>
                                        <span>⦁ React</span>
                                        <span>⦁ MySQL</span>
                                        <span>⦁ Naver Map</span>
                                        <span>⦁ Figma</span>
                                    </div>


                                    <div className={classes.project_area}>
                                        <span>
                                            느낌점과 기술 선정 이유
                                        </span>
                                        <span>
                                            초기 계획은 Front End 개발자 1명, Back End 개발자 2명으로 시작하였습니다. 그러나 디자인 작업이 빨리 진행되어 Front End 개발자가 모든 작업을 담당하기에는 편차가 커질 우려가 있었습니다. 그래서 저는 Front End와 Back End 두 영역을 보조하는 역할로 참여하게 되었습니다.
                                            <br/><br/>
                                            Front End에서는 주로 메인화면, 커뮤니티, 프로필, 로그인 등을 맡아 다른 Front End 개발자가 핵심 기능인 지도 페이지에 집중할 수 있도록 지원하였습니다. Back End 측면에서는 두 서버 간의 통신과 서버 업데이트, 보안 문제 등을 해결하며 실제 서비스를 서버에 올려도 문제없이 작동하고 탄탄한 서비스를 제공할 수 있도록 노력했습니다.
                                            <br/><br/>
                                            Back End 기능을 많이 갭라하지 못한 점이 아쉽지만, Front End와 Back End 모두에 개입하면서 중간 중간 생기는 CORS 문제, SSL/TLS 프로토콜을 사용하는 이유 등과 같은 네트워크적인 상황에 대한 대응 능력을 확실히 숙지할 수 있었습니다.
                                            <br/><br/>
                                            기술 스택으로는 React와 NestJS를 사용하였습니다. 기존에 Express기반의 작업에만 익숙해져 있었기 때문에 다양한 프레임워크를 학습하고자 React와 NestJS를 선택하게 되었습니다. 이를 통해 새로운 기술들에 도전하고 스스로를 성장시키는 기회가 되었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.right_area}>
                                    <div className={classes.right_content}>
                                        <span>회고록</span>

                                        <div className={ mainPageIndex === 1 || mainPageIndex === 2 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 1)}>
                                            <span>다른 서버와의 통신</span>
                                            <span>
                                                항상 싱글 서버 환경에서 개발을 진행하다 처음으로 Front Sever와 Back Server를 분리하여 개발하였습니다. 서버를 나눈다고 해서 달라지는 점은 없다고 생각했지만 생각보다 많은 문제를 마주하였습니다.<br/><br/>
                                                대표적으로 Front Sever에서 Back Server로 API 요청을 보내면 request 내부에 cookie 값이 저장되지 않는 문제가 있었습니다. 로그인 인증 방식은 쿠키에 담겨 있는 JWT를 토대로 유효성 검사를 진행하게 되는데 이러한 문제 때문에 유효성 검사에 문제가 생겼었습니다.<br/><br/>
                                                저는 cookie 값이 사라지는 문제에 대해서 조사를 진행하였고 크게 2가지 문제가 있다는 것을 알게 되었습니다. 첫째로는 요청을 보내는 서버와 요청을 받는 서버의 도메인이 같아야 한다는 내용을 발견했습니다. 그래서 저는 Front Server를 "deats.ejrwnd.com", Back Server를 "server.ejrwnd.com"으로 연결하였습니다.<br/><br/>
                                                두 번째로는 Front Server와 Back Server 모두 SSL/TLS 프로토콜을 사용해야 했습니다. 단순 같은 도메인을 사용하고 있는 것이 아닌 보안상의 이유로 SSL/TLS 프로토콜을 사용할 때만 cookie가 담겼습니다. 해당 이슈를 처리하면서 다른 AWS 계정의 서버를 제 도메인으로 연결할 때 SSL 인증서를 어떤 식으로 발급받아야 하는지에 대해서 학습하게 되었습니다.<br/><br/>
                                            </span>
                                        </div>

                                        <div className={ mainPageIndex === 10 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 10)}>
                                            <span>가맹점 데이터 적재</span>
                                            <span>
                                                가맹점 정보를 Database에 적재할 때 대구광역시 Open API를 통해 받아오는 정보를 저장하였습니다. 하지만 프로젝트 기획 단계에서 가장 있었으면 하는 가게에서 판매하는 메뉴에 대한 정보는 포함되어 있지 않았습니다.<br/><br/>
                                                그래서 저희는 메뉴도 함께 Database에 적재하기 위해 크롤링 방식을 사용하였습니다. 대구광역시 Open API를 통해 1차적으로 받아오는 정보를 크롤링을 통해 2차적으로 가공한 다음 형식에 맞게 Database에 저장하였습니다.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.btn_area}>
                                <div className={classes.link_btn} onClick={() => window.open('https://github.com/KiSeDeok/PowerfulDaegu', '_blank')}>Source</div>
                                <div className={classes.link_btn} onClick={() => window.open('https://deats.ejrwnd.com/home', '_blank')}>Link</div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default DeatsModal;
