import classes from "../style/Career.module.css";
import heavenTree_logo from "../images/heavenTree_logo.png"
import profile_icon from "../images/profile_icon.png";

function Career() {
    return (
        <div className={classes.aaa}>
            <span className={classes.bbb}>Career</span>

            <div className={classes.ddd}>
                <div className={classes.eee}>
                    <img className={classes.ccc} src={heavenTree_logo}/>
                </div>
                <div className={classes.fff}>
                    <div>
                        (주) 헤븐트리
                    </div>
                    <div>
                        2021.11 ~ 2023.01
                    </div>
                    <div>
                        자사 제품 “Clovine”을 주력으로 하고 있는 솔루션 회사입니다. “Clovine”은 클라우드 기술을 기반으로 구축된 프로젝트 및 포트폴리오 관리 프로그램(PPM)이며, 현재 전 세계를 대상으로 서비스를 진행하고 있습니다.
                    </div>
                    <div>
                        저는 선행연구팀에 소속되어 서비스에 새로운 기능을 개발하고 적용하는 업무를 수행했습니다. Express 기반의 풀 스택 웹 개발을 담당하며, 결제 서비스, Android/iOS 앱 개발, 보안 관리 등의 주요 업무를 수행했습니다. 업무에 여유가 있을 때는 동료 개발자의 작업에 대한 코드 리뷰를 하거나 기획을 도우는 등 보조 역할 또한 수행하였습니다.
                    </div>
                    <hr className={classes.ggg}/>
                    <div className={classes.hhh}>
                        <div>▎ 경북여성정책개발원 통계사이트 관리</div>
                        <div>2021.11 ~ 2021.12</div>
                        <ul>
                            <li>Python을 이용하여 Excel 데이터를 HTML 파일로 변환하는 자동화 툴 제작</li>
                            <li>Oracle을 활용한 조회수 기능 DB설계</li>
                            <li>당일 조회수와 누적 조회수를 보여주는 조회수 기능 개발</li>
                            <li>통계데이터 페이지 업데이트</li>
                            <li>Tomcat을 활용한 서버 업데이트</li>
                        </ul>
                    </div>

                    <div className={classes.hhh}>
                        <div>▎ 국가사업을 위한 스마트팩토리 구축</div>
                        <div>2021.12 ~ 2022.01</div>
                        <ul>
                            <li>Python Tesseract OCR 을 이용하여 7-segment 숫자 추출 알고리즘 개발</li>
                            <li>ESP32 CAM 카메라와 Arduino 연결</li>
                            <li>이미지 전송 기능 개발</li>
                            <li>Linux Makefile 등 개발환경 세팅</li>
                            <li>Flask 환경의 실시간 Arduino 모니터링 사이트 제작</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className={classes.hhh}>
                        <div>▎ 경북여성정책개발원 통계사이트 관리</div>
                        <div>2021.11 ~ 2021.12</div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className={classes.hhh}>
                        <div>▎ 경북여성정책개발원 통계사이트 관리</div>
                        <div>2021.11 ~ 2021.12</div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className={classes.hhh}>
                        <div>▎ 경북여성정책개발원 통계사이트 관리</div>
                        <div>2021.11 ~ 2021.12</div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className={classes.hhh}>
                        <div>▎ 경북여성정책개발원 통계사이트 관리</div>
                        <div>2021.11 ~ 2021.12</div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Career;
