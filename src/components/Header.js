import classes from "../style/Header.module.css";

function Header() {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>
                <span>DeokJung</span>
            </div>

            <div className={classes.ccc}>
                <span className={classes.ddd}>About</span>
                <span>|</span>
                <span>Skill</span>
                <span>|</span>
                <span>Projects</span>
                <span>|</span>
                <span>Contact</span>
            </div>
        </div>
    );
}

export default Header;
