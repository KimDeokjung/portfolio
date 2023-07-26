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
                안녕하세요! 새로운 기술에 대한 두려움 없이 끊임없이 도전하고 성장하고자 하는 주니어 Backend 개발자입니다.
                </span>
            </div>
        </div>
    );
}

export default Introduce;
