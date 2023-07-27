import classes from "../style/Contact.module.css";

import contact_icon from "../images/contact_icon.png"

function Contact() {
    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>
                <img className={classes.ccc} src={contact_icon} />
                <span className={classes.ddd}>
                    If you have questions or just<br/>
                    want to get in touch, use the<br/>
                    from below. I look forward to<br/>
                    hearing from you!
                </span>
            </div>
            <div className={classes.eee}>
                <span className={classes.fff}>Contact Me!</span>

                <input className={classes.ggg} placeholder={"Your Name"}/>
                <input className={classes.ggg} placeholder={"Your Email"}/>
                <textarea className={classes.hhh} placeholder={"Message"}/>
                <div className={classes.iii}>
                    <span>Send</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
