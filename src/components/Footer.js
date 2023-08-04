import classes from "../style/Footer.module.css";

import github_footer_icon from "../images/github_footer_icon.png"
import instar_white_icon from "../images/instar_white_icon.png"
import blog_icon from "../images/blog_icon_black.png"

function Footer() {
    return (
        <div className={classes.content}>
            <div className={classes.logo_area}>
                <img className={classes.github_logo} src={github_footer_icon} onClick={() => window.open('https://github.com/KimDeokjung', '_blank')} />
                <img src={instar_white_icon} onClick={() => window.open('https://www.instagram.com/duck_1733/', '_blank')} />
                <img className={classes.velog_logo} src={blog_icon} onClick={() => window.open('https://velog.io/@kimdeokjoong', '_blank')} />
            </div>

            <span>Made by DeokJung Kim (2023)</span>
        </div>
    );
}

export default Footer;
