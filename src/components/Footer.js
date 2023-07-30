import classes from "../style/Footer.module.css";

import github_footer_icon from "../images/github_footer_icon.png"
import instar_white_icon from "../images/instar_white_icon.png"
import blog_icon from "../images/blog_icon_black.png"

function Footer() {
    return (
        <div className={classes.aaa}>
            <div className={classes.ccc}>
                <img className={classes.bbb} src={github_footer_icon} />
                <img src={instar_white_icon} />
                <img className={classes.ddd} src={blog_icon} />
            </div>

            <span className={classes.eee}>Made by DeokJung Kim (2023)</span>
        </div>
    );
}

export default Footer;
