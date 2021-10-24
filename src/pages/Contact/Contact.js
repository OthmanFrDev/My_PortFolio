import shake from '../../assets/shake.svg'
import classes from "./Contact.module.css"
const Contact = () => {
    return (
        <div className={"row justify-content-center align-items-center m-0 "+classes.row_contact}>
            <div className={"col-md-6 col-sm-12 "+classes.left_contact}>
                <img src={shake} alt="" className={classes.img} />
            </div>
            <div className={"col-md-6 col-sm-12 "+classes.right_contact}>
                <h2>Contact Me.</h2>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="contact@othmanfroukh.com"/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="write your message here">

                    </textarea>
                    <button> Send </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;