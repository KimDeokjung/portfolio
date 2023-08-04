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
        <div className={classes.content}>
            <span className={classes.header}>About</span>

            <div className={classes.down_area}>
                <img className={classes.profile_img} src={profile_image} />

                <div className={classes.info_area}>
                    <div className={classes.left_area}>
                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={profile_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>이름</span>
                                <span className={classes.info_content}>김덕중</span>
                            </div>
                        </div>

                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={birth_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>생년월일</span>
                                <span className={classes.info_content}>1997.11.03</span>
                            </div>
                        </div>

                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={pin_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>주소</span>
                                <span className={classes.info_content}>대구광역시 북구</span>
                            </div>
                        </div>

                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={phone_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>연락처</span>
                                <span className={classes.info_content}>010-5272-1733</span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.hhh}>
                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={mail_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>메일</span>
                                <span className={classes.info_content}>ejrwnd1103@naver.com</span>
                            </div>
                        </div>

                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={school_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>학력</span>
                                <span className={classes.info_content}>영남대학교 컴퓨터공학과</span>
                            </div>
                        </div>

                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={github_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>GitHub</span>
                                <span className={classes.info_content} onClick={() => window.open('https://github.com/KimDeokjung', '_blank')}>바로가기</span>
                            </div>
                        </div>

                        <div className={classes.detail_info_area}>
                            <img className={classes.icon_img} src={blog_icon}/>
                            <div className={classes.detail_info}>
                                <span className={classes.info_header}>Vlog</span>
                                <span className={classes.info_content} onClick={() => window.open('https://velog.io/@kimdeokjoong', '_blank')}>바로가기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCard;
