import shake from '../../assets/shake.svg'
import classes from "./Contact.module.css"
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
const Contact = (props) => {
    const form = useRef();
    console.log(props)
    const [sendOk, setSendOk] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m6a3l2b', 'template_n1m1i97', form.current, 'user_0bb77VuYIwqEOzOmW7zWW')
            .then((result) => {
                console.log("result", result)
                setSendOk(true)
            }, (error) => {
                setSendOk(false);
            });
        setTimeout(() => {
            setSendOk(false);
        }, 3000)
        e.target.reset()
    };
    return (
        <div className={"row justify-content-center align-items-center m-0 " + classes.row_contact}>
            <div className={"col-md-6 col-sm-12 " + classes.left_contact}>
                <img src={shake} alt="" className={classes.img} />
            </div>
            <div className={"col-md-6 col-sm-12 " + classes.right_contact}>
                <h2>Contact Me.</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="name" placeholder="Othman FROUKH" />
                    <input type="email" name="email" id="email" placeholder="contact@othmanfroukh.com" />
                    <input type="text" name="Subject" id="Subject" placeholder="Subject" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="write your message here">

                    </textarea>
                    <button type="submit"> Send </button>
                </form>
                {sendOk && <span style={{ color: "green" }}>Thank you for your message, I'll answer you ASAP 😃.</span>}
            </div>

        </div>
    );
}

export default Contact;