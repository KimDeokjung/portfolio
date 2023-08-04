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
                alert("이메일이 전송이 실패되었습니다.");
            },
        );
    };

    return (
        <div className={classes.content}>
            <div className={classes.left_area}>
                <img className={classes.img} src={contact_icon} />
                <span className={classes.thanks_text}>
                    저의 포트폴리오를<br/>
                    읽어주셔서 감사합니다.<br/><br/>

                    궁금하신 사항이 있으면,<br/>
                    편하게 연락주세요!
                </span>
            </div>
            <div className={classes.right_area}>
                <span className={classes.title}>Contact Me!</span>

                <form className={classes.form_area} ref={form} onSubmit={sendEmail}>
                    <input className={classes.input_box} placeholder={"Your Name"} name="ask_title"/>
                    <input className={classes.input_box} placeholder={"Your Email"} name="user_email"/>
                    <textarea className={classes.input_area} placeholder={"Message"} name="ask_message"/>
                    <div className={classes.btn_area} onClick={sendEmail.bind(this)}>
                        <span>Send</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
