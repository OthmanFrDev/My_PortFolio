import React from "react"
import classes from './body.module.css'
const Body = () => {
    return (
        <div className={classes.bgimg}>
            <div className={classes.middle}>
                <h1>COMING SOON</h1>
                <hr/>
                <p>Stay tunned</p>
            </div>
        </div>
    );
}

export default Body;