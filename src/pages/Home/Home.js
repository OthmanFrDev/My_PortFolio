import classes from './home.module.css'
import img from '../../assets/man.png'
import * as AiIcons from "react-icons/ai"
import { IconContext } from "react-icons"

const Home = () => {
    return (
        <IconContext.Provider value={{ size: "30px", color: "#060B26" }}>
            <div className={"row m-0 "+classes.row_home}>
                <div className={"col-md-6 col-sm-12 align-self-center " + classes.left_home}>
                    <div className={classes.left_wrapper}>
                        <h2 className={classes.intro}>Hello, My name is</h2>
                        <h1 className={classes.name}>Othman FROUKH</h1>
                        <div className={classes.title}>
                            <div className={classes.title_wrapper}>
                                <div className={classes.title_item}>Java</div>
                                <div className={classes.title_item}>Spring Boot</div>
                                <div className={classes.title_item}>Oracle</div>
                                <div className={classes.title_item}>Spring</div>
                                <div className={classes.title_item}>MySql</div>
                                <div className={classes.title_item}>Rest api</div>
                                <div className={classes.title_item}>JSON</div>
                                <div className={classes.title_item}>XML</div>
                                <div className={classes.title_item}>ReactJS</div>
                                <div className={classes.title_item}>Angular</div>
                            </div>
                        </div>
                        <span className={classes.description}>
                            I'm a passionate Java developer from Morocco
                        </span>
                        <div className={classes.home_social_media}>
                            <a href="https://www.linkedin.com/in/othmanfroukh/"><AiIcons.AiOutlineGithub /></a>
                            <a href="https://www.linkedin.com/in/othmanfroukh/"><AiIcons.AiOutlineLinkedin /></a>
                            <a href="https://www.linkedin.com/in/othmanfroukh/"><AiIcons.AiOutlineFacebook /></a>
                        </div>
                        <div className={classes.btn_cv}>
                            <button type="button" className="btn">Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className={"col-md-6 col-sm-12 "+classes.img_lg}>
                    <div className={classes.imgcontainer}>
                        <div className={classes.i_bg}></div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Home;