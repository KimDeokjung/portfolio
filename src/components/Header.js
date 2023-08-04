import classes from "../style/Header.module.css";

function Header() {
    return (
        <div className={classes.content}>
            <div className={classes.logo}>
                <span>DeokJung</span>
            </div>
        </div>
    );
}

export default Header;
