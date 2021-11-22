import "./Sidebar.css"
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'
import { Link } from "react-router-dom"
import { navigationArray } from '../navigationArray/navigationArray'
import { useState } from "react"
import { IconContext } from "react-icons"
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: "#ffffff" }}>
                <div className={sidebar ? "Sidebar active" : "Sidebar"}>
                    <div className="left-sidebar" style={{marginLeft:"10px"}}>
                        <Link to='#' className={"menu-bars"} onClick={showSidebar}>
                            <div className="hamburger">
                                <span className="line1"></span>
                                <span className="line2"></span>
                                <span className="line3"></span>
                            </div>
                        </Link>
                    </div>
                    <div className="right-sidebar">
                        <Link to='#' className={"menu-bars-contact"}>
                            <AiIcons.AiOutlineMail />
                            <a className="span" href="mailto:othmanfroukh@gmail.com?body=Hey Mr Othman,">othmanfroukh@gmail.com</a>
                        </Link>
                        <Link to='#' className={"menu-bars-contact"}>
                            <FiIcons.FiPhoneCall />
                            <a href="tel:+212649440167" className="span">+212-6-49-44-01-67</a>
                        </Link>
                    </div>

                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className={"nav-menu-items"} onClick={showSidebar}>
                        {
                            navigationArray.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.link}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;