import { useRef } from "react";
import emailjs from '@emailjs/browser';

import classes from "../style/Contact.module.css";

import contact_icon from "../images/contact_icon.png"

function Contact() {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm("service_tpm0xde", "template_a1pl16c", form.current, "lExVEqw4nyYhu6Vag").then(
            result => {
                alert("성공적으로 이메일이 전송되었습니다.");
            },
            error => {
                console.log(error.text);
                alert("이메일이 전송이 실패되었습니다.");
            },
        );
    };

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

                <form className={classes.jjj} ref={form} onSubmit={sendEmail}>
                    <input className={classes.ggg} placeholder={"Your Name"} name="ask_title"/>
                    <input className={classes.ggg} placeholder={"Your Email"} name="user_email"/>
                    <textarea className={classes.hhh} placeholder={"Message"} name="ask_message"/>
                    <div className={classes.iii} onClick={sendEmail.bind(this)}>
                        <span>Send</span>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Contact;
