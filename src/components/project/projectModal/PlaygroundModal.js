import {useState, useEffect} from "react";

import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "../../../style/project/ProjectModal.module.css";

import deleteBtn from "../../../images/deleteBtn_icon.png"
import one from "../../../images/modal/playground/1.png"
import two from "../../../images/modal/playground/2.png"
import three from "../../../images/modal/playground/3.png"
import four from "../../../images/modal/playground/4.png"
import five from "../../../images/modal/playground/5.png"
import six from "../../../images/modal/playground/6.png"
import seven from "../../../images/modal/playground/7.png"
import eight from "../../../images/modal/playground/8.png"

function PlaygroundModal(props) {
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
                                Playground
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
                                            고등학생 시절부터 친구였던 친구와 함께 수행한 프로젝트입니다. 이 프로젝트는 저와 친구가 평소 내기를 즐겼는데, 내기 방식을 고민하다 직접 게임을 만들어보면 재밌을 것 같다는 아이디어에서 출발하였습니다. 여러 가지 다양한 게임을 한 사이트에 게임방 형태로 만드는 것이 주요 목표였습니다.
                                        </span>
                                    </div>

                                    <div className={classes.fun_area}>
                                        <span>
                                            주요 기능 ( ✔ = My Work )
                                        </span>
                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 0 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 0)}>
                                                { mainPageIndex === 0 ? "▼" : "▶"} 게임선택
                                            </span>
                                            <span className={mainPageIndex === 0 ? classes.active_fun_list : classes.hide_area}>
                                                사용자가 게임을 선택 할 수 있습니다. 원하는 게임을 클릭 시 해당 페이지로 이동합니다.
                                                <br/><br/>
                                                디자인에 최대한 시간을 아끼기 위해 대부분의 CSS를 Bootstrap을 이용하여 진행했습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 1 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 1)}>
                                                { mainPageIndex === 1 ? "▼" : "▶"} 랜덤
                                            </span>
                                            <span className={mainPageIndex === 1 ? classes.active_fun_list : classes.hide_area}>
                                                최대 숫자를 입력하고 시작을 누르게되면 화면에 0~입력한숫자 까지 중 랜덤으로 숫자 하나가 표시됩니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 2 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 2)}>
                                                { mainPageIndex === 2 ? "▼" : "▶"} 유튜브 ✔
                                            </span>
                                            <span className={mainPageIndex === 2 ? classes.active_fun_list : classes.hide_area}>
                                                각각의 검색어를 입력 하고 시작하면 유튜브에서 그 검색어를 입력했을 때 가장 상단에 노출되는 영상을 표시합니다.
                                                <br/><br/>
                                                Youtube APi를 통해 입력받은 검색어에 매칭되는 영상의 정보를 받아옵니다. Youtube Api같은 경우 무료로 사용할 경우 일일 최대 제한이 있기 때문에 예외처리를 따로 하였습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 3 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 3)}>
                                                { mainPageIndex === 3 ? "▼" : "▶"} 제비뽑기
                                            </span>
                                            <span className={mainPageIndex === 3 ? classes.active_fun_list : classes.hide_area}>
                                                당첨과 꽝의 갯수를 설정한 뒤, 번갈아 가며 한개씩 제비를 확인합니다. 초기화를 누를 경우 꽝 위치가 바뀌며, 꽝 확인을 누를 경우 꽝인 제비만 일시적으로 뒤집히며 위치를 확인시켜 줍니다.
                                                <br/><br/>
                                                단순히 제비뽑기를 하는게 아닌 랭킹 기능을 만들어 자신의 플레이 기록을 MongoDB에 저장해 해당 플레이의 랭킹을 보여줍니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 4 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 4)}>
                                                { mainPageIndex === 4 ? "▼" : "▶"} 날씨
                                            </span>
                                            <span className={mainPageIndex === 4 ? classes.active_fun_list : classes.hide_area}>
                                                근 일주일간의 기온, 습도, 풍속 등의 날씨를 예측하여 맞추는 게임입니다. 각 날짜별로 예측한 데이터와의 차이가 적은 쪽이 승리합니다.
                                                <br/><br/>
                                                기상청 Api를 통해 근 일주일간의 데이터를 받아와 비교합니다. 기상청 Api의 경우 일일 데이터 요청에 제한이 낮아서 못받아오는 경우의 예외처리를 따로 하였습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 5 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 5)}>
                                                { mainPageIndex === 5 ? "▼" : "▶"} 로비
                                            </span>
                                            <span className={mainPageIndex === 5 ? classes.active_fun_list : classes.hide_area}>
                                                모든 멀티게임에 공동적으로 들어가는 페이지 입니다. 새로운 게임을 만들 수도 있고, 기존에 만들어진 게임에 참여도 할 수 있습니다.
                                                <br/><br/>
                                                자신이 접속하고 있는 게임이 아닌 다른 게임의 방이 보이면 안되기 때문에 Socket의 room 개념을 사용하였습니다. 같은 방에 들어와있는 인원이 2명이 되면 게임 플레이 화면으로 넘어갑니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 6 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 6)}>
                                                { mainPageIndex === 6 ? "▼" : "▶"} 하키 ✔
                                            </span>
                                            <span className={mainPageIndex === 6 ? classes.active_fun_list : classes.hide_area}>
                                                PC의 경우 "w"와 "s"키, 모바일의 경우 터치를 이용해 보드판을 위/아래로 움직이면서 고을 서로에게 튕겨 공격하는 게임입니다.
                                                <br/><br/>
                                                Soket.io를 이용하여 만든 게임입니다. 양방향 통신을 통해 공의 구심점, 보드판의 위치, 속도 등을 받아오면 공과 Canvas를 이용해 화면에 표시하였습니다.
                                            </span>
                                        </div>

                                        <div className={classes.fun_list_area}>
                                            <span className={ mainPageIndex === 7 ? classes.active_fun : classes.default_fun} onClick={setSlide.bind(this, 7)}>
                                                { mainPageIndex === 7 ? "▼" : "▶"} 숫자야구
                                            </span>
                                            <span className={mainPageIndex === 7 ? classes.active_fun_list : classes.hide_area}>
                                                초반에 숫자의 자릿수와 제한시간을 설정하면 그 설정값에 맞춰 숫자야구를 진행하는 게임입니다.
                                                <br/><br/>
                                                Soket.io를 이용하여 만든 게임입니다. 숫자 입력 이벤트를 송신하여 상대방의 Document를 업데이트 시켜줍니다.
                                            </span>
                                        </div>
                                    </div>

                                    <div className={classes.skill_area}>
                                        <span>
                                            사용 기술
                                        </span>
                                        <span>⦁ HTML5</span>
                                        <span>⦁ NodeJS</span>
                                        <span>⦁ TypeScript</span>
                                        <span>⦁ Express</span>
                                        <span>⦁ Socket</span>
                                        <span>⦁ MongoDB</span>
                                    </div>


                                    <div className={classes.project_area}>
                                        <span>
                                            느낌점과 기술 선정 이유
                                        </span>
                                        <span>
                                            이 프로젝트는 무엇보다도 친구와 함께 즐기면서 만들었다는 점이 가장 큰 강점입니다. 평소에는 학습이나 업무 위주의 프로젝트들을 하곤 했는데, 이번 프로젝트는 순수한 즐거움과 창의성을 느낄 수 있는 소중한 경험이었습니다. 친구가 같은 분야를 배우고 있었기 때문에 함께 코딩하고 이야기하는 시간들이 특히 즐거웠습니다.
                                            <br/><br/>
                                            기술 스택으로는 가장 자신있다고 생각한 Express와 MongoDB를 선택하였습니다. 이번 기회에 프로젝트에 더해질 차별성을 위해 Typescript를 도입하고자 하였습니다. Typescript를 사용하면 코드 관리와 유지보수가 용이해질 뿐만 아니라, 좀 더 안정적이고 확장 가능한 프로젝트를 만들 수 있다고 생각했습니다.
                                            <br/><br/>
                                            또한, 솔로플레이 위주의 게임보다 멀티플레이가 가능한 게임을 만들기 위해 Socket을 활용하였습니다. Firebase를 사용해본 경험이 있었지만, 이번에는 Socket을 통한 양방향 통신을 처음으로 적용해보았습니다. 실시간 동기화에 대한 이해와 사용에 많은 노력을 기울이며, 이를 통해 숙련도를 높일 수 있었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.right_area}>
                                    <div className={classes.right_content}>
                                        <span>회고록</span>

                                        <div className={ mainPageIndex === 2 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 2)}>
                                            <span>유튜브 데이터 호출</span>
                                            <span>
                                                Youtube Api를 이용해서 데이터를 받아오는 거에 생각보다 시간이 오래 걸렸습니다. 처음에는 한 개의 영상 정보가 도착하면 다음 영상 정보를 호출하는 식으로 진행하였는데, 검색어가 5개만 넘어가도 페이지가 멈추는 착각이 들었습니다.<br/><br/>
                                                해당 문제를 개선할 수 있는 부분은 총 2가지였습니다. 첫째로 Youtube API를 호출하는 부분의 시간 복잡도를 줄일 필요를 느꼈습니다. 이러한 문제를 해결하기 위해서 영상의 정보를 받아온 뒤, 다음 영상의 정보를 받아오는 동기 형식의 코드에서 Promise를 이용한 비동기 형식의 코드로 변경하였습니다. 그 결과 Youtube API 호출의 시간 복잡도가 O(N)에서 O(1)까지 줄어들게 되었습니다.<br/><br/>
                                                두 번째로 사용자가 페이지가 멈춘 것인지 데이터를 받아오는 것인지 확실하게 인지시킬 필요가 있었습니다. 두 가지 방식의 차별성을 두기 위해 데이터를 받아올 때는 로딩 창울 추가하였습니다. 속도 측면에서는 개선사항이 없을지 모르나 사용자가 인식하기에는 명확한 동작을 하는 것처럼 보이기 때문에 UX 측면에서 개선되었습니다.
                                            </span>
                                        </div>

                                        <div className={ mainPageIndex === 6 ? classes.active_detail : classes.default_detail} onClick={setSlide.bind(this, 6)}>
                                            <span>공 위치 계산</span>
                                            <span>
                                                이 프로젝트를 하면서 가장 많은 신경을 썼던 부분입니다. 하키 게임은 임의로 프레임을 설정 해둔 뒤, 각 프레임마다 공의 위치와 보드의 위치를 Player1과 Player2에게 동시에 보내게 됩니다.<br/><br/>
                                                공의 위치에 더해지는 변수는 벽과의 충돌, 보드와의 충돌, 가속으로 총 3가지입니다. 벽과의 충돌과 보드와의 충돌은 공의 x축 속도와 y 축 속도를 반전시켜주면 되지만 가속 같은 경우 한쪽으로만 가속을 주게 되면 위아래로만 빨리 가는 등 이상한 공의 궤적이 만들어지게 됩니다.<br/><br/>
                                                그래서 저는 각도라는 속성을 추가하여 구심점을 중심으로 해당 각도의 위치로 일정한 크기의 가속을 더해주었습니다. 그 결과 공의 속도는 부드럽게 가속되는 궤적을 만들었으며 게임에 흥미를 한층 더했습니다.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.btn_area}>
                                <div className={classes.link_btn} onClick={() => window.open('https://github.com/abcworld123/playground', '_blank')}>Source</div>
                                <div className={classes.link_btn} onClick={() => window.open('https://game.abcworld123.com', '_blank')}>Link</div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default PlaygroundModal;
