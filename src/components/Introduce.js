import classes from "../style/Introduce.module.css";

function Introduce() {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>
                <div className={classes.ccc}>
                    김덕중의<br/>
                    Backend 개발자 포트폴리오
                </div>

                <span className={classes.ddd}>
                    안녕하세요! 새로운 기술에 대한 열정과 지속적인 발전을 추구하는 주니어 Backend 개발자입니다. 변화하는 디지털 시대에 적응하며, 새로운 도전을 즐기고 끊임없이 성장하고자 합니다. 사용자들에게 더 나은 경험을 제공하고 혁신적인 기술을 탐구하는 데에 헌신하고 있습니다.
                </span>
            </div>
        </div>
    );
}

export default Introduce;
