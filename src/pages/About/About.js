import classes from './About.module.css'
const About = () => {
    return (
        <div className="container">
            <div className={"row "+classes.row_about} style={{margin: "0 auto" }}>
                <h2>My Education</h2>
                <div className={"col-12 "+classes.col_about}>
                    <div>
                        <h3 className={classes.education_year}>2019 - 2022</h3>
                        <span className={classes.education_university}>Moroccan School of Engineering Sciences  <br/> <i>Rabat-MOROCCO </i></span>
                    </div>
                    <div className={classes.education_time}>
                        <span className={classes.education_rounder}></span>
                        <span className={classes.education_line}></span>
                    </div>
                    <div>
                        <h3 className={classes.education_race}>Engineering degree</h3>
                        <span className={classes.education_speciality}>Software engineering <br/>(Computing methods applied to business management)</span>
                    </div>
                </div>
                <div className={"col-12 "+classes.col_about}>
                    <div>
                        <h3 className={classes.education_year}>2017 - 2019</h3>
                        <span className={classes.education_university}>Specialized Institute of Applied Technology <br/> <i>Rabat-MOROCCO </i></span>
                    </div>
                    <div className={classes.education_time}>
                        <span className={classes.education_rounder}></span>
                        <span className={classes.education_line}></span>
                    </div>
                    <div>
                        <h3 className={classes.education_race}>Specialized technician</h3>
                        <span className={classes.education_speciality}>IT development</span>
                    </div>
                </div>
                <div className={"col-12 "+classes.col_about}>
                    <div>
                        <h3 className={classes.education_year}>2015 - 2016</h3>
                        <span className={classes.education_university}>SaLmane EL FARISSI High School <br/> <i> Temara-MOROCCO </i></span>
                    </div>
                    <div className={classes.education_time}>
                        <span className={classes.education_rounder}></span>
                        <span className={classes.education_line}></span>
                    </div>
                    <div>
                        <h3 className={classes.education_race}>High School Degree</h3>
                        <span className={classes.education_speciality}>Physics and chemistry</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;