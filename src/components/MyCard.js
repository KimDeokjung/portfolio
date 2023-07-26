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
            <span className={classes.eee}>ABOUT</span>

            <div className={classes.ddd}>
                <img className={classes.bbb} src={profile_image} />

                <div className={classes.ccc}>
                    <div>
                        <img src={profile_icon}/>
                        <span>김덕중</span>
                    </div>
                    <div>
                        <img src={birth_icon}/>
                        <span>1997.11.03</span>
                    </div>
                    <div>
                        <img src={pin_icon}/>
                        <span>대구광역시 북구</span>
                    </div>
                    <div>
                        <img src={phone_icon}/>
                        <span>010-5272-1733</span>
                    </div>
                    <div>
                        <img src={mail_icon}/>
                        <span>ejrwnd1103@naver.com</span>
                    </div>
                    <div>
                        <img src={school_icon}/>
                        <span>영남대학교 컴퓨터공학과</span>
                    </div>
                    <div>
                        <img src={github_icon}/>
                        <span>바로가기</span>
                    </div>
                    <div>
                        <img src={blog_icon}/>
                        <span>바로가기</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCard;
