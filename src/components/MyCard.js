import classes from "../style/MyCard.module.css";
import profile_image from "../images/kimDeokJung.jpg"
import birth_icon from "../images/birth_icon.png"
import blog_icon from "../images/blog_icon.png"
import github_icon from "../images/github_icon.png"
import mail_icon from "../images/mail_icon.png"
import phone_icon from "../images/phone_icon.png"
import pin_icon from "../images/pin_icon.png"
import profile_icon from "../images/profile_icon.png"
import school_icon from "../images/school_icon.png"

function MyCard() {
    return (
        <div className={classes.aaa}>
            <span className={classes.eee}>About</span>

            <div className={classes.ddd}>
                <img className={classes.bbb} src={profile_image} />

                <div className={classes.ccc}>
                    <div className={classes.ggg}>
                        <div className={classes.kkk}>
                            <img className={classes.fff} src={profile_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>이름</span>
                                <span className={classes.nnn}>김덕중</span>
                            </div>
                        </div>

                        <div className={classes.kkk}>
                            <img className={classes.fff} src={birth_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>생년월일</span>
                                <span className={classes.nnn}>1997.11.03</span>
                            </div>
                        </div>

                        <div className={classes.kkk}>
                            <img className={classes.fff} src={pin_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>주소</span>
                                <span className={classes.nnn}>대구광역시 북구</span>
                            </div>
                        </div>

                        <div className={classes.kkk}>
                            <img className={classes.fff} src={phone_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>연락처</span>
                                <span className={classes.nnn}>010-5272-1733</span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.hhh}>
                        <div className={classes.kkk}>
                            <img className={classes.fff} src={mail_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>메일</span>
                                <span className={classes.nnn}>ejrwnd1103@naver.com</span>
                            </div>
                        </div>

                        <div className={classes.kkk}>
                            <img className={classes.fff} src={school_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>학력</span>
                                <span className={classes.nnn}>영남대학교 컴퓨터공학과</span>
                            </div>
                        </div>

                        <div className={classes.kkk}>
                            <img className={classes.fff} src={github_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>GitHub</span>
                                <span className={classes.nnn}>바로가기</span>
                            </div>
                        </div>

                        <div className={classes.kkk}>
                            <img className={classes.fff} src={blog_icon}/>
                            <div className={classes.lll}>
                                <span className={classes.mmm}>Vlog</span>
                                <span className={classes.nnn}>바로가기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCard;
