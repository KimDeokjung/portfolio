import {useState, useEffect} from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "../../../style/project/ProjectModal.module.css";

import deleteBtn from "../../../images/deleteBtn_icon.png"
import one from "../../../images/modal/ims/1.png"
import two from "../../../images/modal/ims/2.png"
import three from "../../../images/modal/ims/3.png"
import four from "../../../images/modal/ims/4.png"
import five from "../../../images/modal/ims/5.png"
import six from "../../../images/modal/ims/6.png"

function Ims(props) {
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
                                IMS
                            </div>

                            <img className={classes.deleteBtn} src={deleteBtn} onClick={props.modalHandler.bind(this, 0)} />
                        </div>

                        <div className={classes.content}>
                            <div className={classes.top_content}>
                                <div className={classes.left_content}>
                                    <div className={classes.mobile_swiper_area}>
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
                                            재직시절 대학생 디자이너분들과 함께 진행한 프로젝트입니다. 이 프로젝트는 주로 회사에서 진행하는 다양한 프로젝트들의 의견수립과 이슈 관리를 도울 수 있는 모바일 서비스를 개발하는 학습 목적으로 진행되었습니다. 저는 회사에서 사용하는 프레임워크의 숙련도를 향상시키고, 디자이너 분들과의 협업에 필요한 스킬을 익히는 것을 목표로 삼았습니다.
                                        </span>
                                    </div>

                                    <div className={classes.fun_area}>
                                        <span>
                                            주요 기능 ( ✔ = My Work )
                                        </span>
                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 0 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 0)}>
                                                { mainPageIndex === 0 ? "▼" : "▶"} 로그인
                                            </span>
                                            <span className={mainPageIndex === 0 ? classes.active_fun_list : classes.hide_area}>
                                                사용자가 아이디, 비밀번호를 입력하여 로그인을 시도합니다. 로그인이 된다면 프로젝트 뷰 페이지로 이동됩니다.
                                                <br/><br/>
                                                비밀번호를 해싱키 암호화를 통해 암호화한 뒤 MongoDB에 저장된 정보와 매칭이 된다면 cookie에 JWT형태의 토큰을 추가하여 로그인을 관리합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 1 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 1)}>
                                                { mainPageIndex === 1 ? "▼" : "▶"} 회원가입
                                            </span>
                                            <span className={mainPageIndex === 1 ? classes.active_fun_list : classes.hide_area}>
                                                사용자의 아이디, 비밀번호, 이메일, 이름을 받아 새로운 회원을 등록합니다.
                                                <br/><br/>
                                                등록된 사용자는 MongoDB에 정보를 추가하여 회원을 등록합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 2 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 2)}>
                                                { mainPageIndex === 2 ? "▼" : "▶"} 프로젝트 ✔
                                            </span>
                                            <span className={mainPageIndex === 2 ? classes.active_fun_list : classes.hide_area}>
                                                IMS 서비스에 등록된 프로젝트들을 리스트 형태로 표시합니다. 카테고리를 분류할 수 있으며 썸네일 형태로 보여줍니다.
                                                <br/><br/>
                                                전체 프로젝트 중 5개만 MongoDB에 필터를 걸어 요청합니다. 스크롤 바가 맨 아래에 도달했을 경우 추가로 5개의 프로젝트를 더 요청합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 3 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 3)}>
                                                { mainPageIndex === 3 ? "▼" : "▶"} 프로젝트 생성 ✔
                                            </span>
                                            <span className={mainPageIndex === 3 ? classes.active_fun_list : classes.hide_area}>
                                                프로젝트 이름, 담당자, 멤버, 공개범위, 분류, 프로젝트 설명, 썸네일을 입력하여 새로운 프로젝트를 등록합니다.
                                                <br/><br/>
                                                등록한 썸네일은 MongoDB에 저장하기 위해 16MB이하의 파일만 입력받을 수 있으며  Binary형태로 MongoDB에 저장 합니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 4 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 4)}>
                                                { mainPageIndex === 4 ? "▼" : "▶"} 프로젝트 디테일 ✔
                                            </span>
                                            <span className={mainPageIndex === 4 ? classes.active_fun_list : classes.hide_area}>
                                                등록된 프로젝트의 상세정보를 표시합니다. 각각의 프로젝트에는 좋아요를 눌러 평가를 할 수 있습니다.
                                                <br/><br/>
                                                프로젝트를 클릭하면 해당 리스트에 담겨있는 project_id값을 기반으로 MongoDB에 요청 합니다. 데이터를 가져오는 과정에서 좋아요의 수는 갯수와 함께 좋아요를 누른 사람들의 아이디를 같이 받아옵니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 5 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 5)}>
                                                { mainPageIndex === 5 ? "▼" : "▶"} 리뷰 및 이슈 ✔
                                            </span>
                                            <span className={mainPageIndex === 5 ? classes.active_fun_list : classes.hide_area}>
                                                사용자가 프로젝트에 리뷰 혹은 이슈를 등록할 수 있습니다. 해당 내용은 프로젝트 디테일 하단부분에 위치합니다.
                                                <br/><br/>
                                                프로젝트 디테일을 받아오는 부분에서 함께 데이터를 받아옵니다. Express의 특색을 잘 살리기 위해 다양한 테이블을 접근할 때 비동기적 특성을 이용하였습니다. 이슈의 경우 카테고리에 따른 아이콘을 표시해줍니다.
                                            </span>
                                        </div>
                                    </div>

                                    <div className={classes.skill_area}>
                                        <span>
                                            사용 기술
                                        </span>
                                        <span className={classes.margin_bottom_16}>⦁ HTML5</span>
                                        <span className={classes.margin_bottom_16}>⦁ Node.js</span>
                                        <span className={classes.margin_bottom_16}>⦁ JavaScript</span>
                                        <span className={classes.margin_bottom_16}>⦁ Express</span>
                                        <span className={classes.margin_bottom_16}>⦁ MongoDB</span>
                                        <span className={classes.margin_bottom_16}>⦁ Figma</span>
                                    </div>


                                    <div className={classes.project_area}>
                                        <span>
                                            느낌점과 기술 선정 이유
                                        </span>
                                        <span>
                                            프로젝트를 위해 에브리타임이라는 대학생 커뮤니티에 모집글을 올려 디자이너 두 분을 찾게 되었습니다. 회사에는 디자인 팀이 있었지만, 개인과제를 진행하고 있던 저에게 디자이너 분들과의 협업은 낯설었습니다. 그러나 디자이너 분들의 도움으로 Figma라는 협업 툴을 배우게 되었고, 제가 만든 페이지를 직접 서버에 올려 체험하며 디자이너 분들과 서버에 올린 프로젝트를 다양한 기기에서 테스트하며 생기는 이슈를 논의하며 맞춰나가는 뜻깊은 경험을 했습니다.
                                            <br/><br/>
                                            회사에서 주로 사용하는 기술인 Express와 MongoDB를 선택하여 기술 스택으로 사용했습니다. 개인과제와 외주 업무를 주로 수행하던 기간 이후, 자사 제품을 개발하는 프로젝트에 투입될 예정이었는데, Express와 MongoDB를 처음 접하는 상황에서 팀원들에게 피해를 주지 않고자 해당 기술들의 숙련도를 높이고자 노력했습니다.
                                            <br/><br/>
                                            모바일 버전을 개발한 이유는 디자이너분들의 의견이었습니다. 디자인에 참여한 두 분 모두 PC 기반의 디자인보다는 Mobile 기반의 디자인에 더욱 숙련되길 원하셨습니다. 저도 Mobile 환경 개발이 낯선 과제였지만, 같이 처음부터 배워나가는 마음으로 프로젝트를 진행하게 되었습니다. 이를 통해 디자이너 분들과 함께 성장하는 소중한 경험을 쌓을 수 있었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.right_area}>
                                    <div className={classes.right_content}>
                                        <span>회고록</span>

                                        <div className={ mainPageIndex === 3 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 3)}>
                                            <span>이미지 저장</span>
                                            <span>
                                                이미지를 저장하는 방식에 대해서 고민하였습니다. 크게는 AWS S3에 저장한 뒤, 경로를 Database에 저장하는 방식과, Binary 형태로 Database에 저장하는 방식 2가지를 조사하며 비교하였습니다.<br/><br/>
                                                안전성과 확장성 측면에서는 AWS S3에 저장한 뒤, 경로를 저장하는 방식이 우세하다는 걸 알게 되었습니다. 하지만 단순 썸네일을 저장하는 기능에서 대용량 업로드와 같은 기능은 필요 없다 판단하였고 AWS S3까지 연결하게 되면 너무 과하다고 생각했습니다. 이러한 이유로 입력받은 이미지를 Binary 형태로 Database에 저장하는 방식으로 개발을 진행하였습니다.
                                            </span>
                                        </div>

                                        <div className={ mainPageIndex === 4 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 4)}>
                                            <span>좋아요 표시</span>
                                            <span>
                                                초반 Database구조를 짤 때 미숙하게 설계를 진행하여 나중에 문제가 생긴 경우입니다.<br/><br/>
                                                처음에는 프로젝트 테이블 안에 like라는 필드를 단순 숫자형태로 저장하였습니다. 하지만 숫자로 저장을 하니 누가 프로젝트에 좋아요를 누른지 알 수 없게 되었고, 이미 좋아요를 누른 유저가 계속해서 좋아요를 누를 수 있게 되었습니다.<br/><br/>
                                                결국에는 like의 속성을 MongoDB에 특성에 맞게 숫자 형태에서 리스트 형태로 바꿔 문제를 해결할 수 있었습니다. Database를 설계할 때 기능단위의 동작 또한 생각하는 것이 추후 개발에 도움이 된다 느꼈습니다.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.btn_area}>
                                <div className={classes.link_btn} onClick={() => window.open('https://github.com/KimDeokjung/IMS', '_blank')}>Source</div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default Ims;
