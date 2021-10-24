import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GrIcons from 'react-icons/gr'
export const navigationArray=[
    {
        title: "Home",
        icon:<AiIcons.AiFillHome/>,
        link: "/home",
        cName:'nav-text'   
    },
    {
        title: "About",
        icon:<IoIcons.IoIosSchool/>,
        link: "/about",
        cName:'nav-text'      
    },
    {
        title: "Works",
        icon:<AiIcons.AiFillAlert/>,
        link: "/home",
        cName:'nav-text'   
    },
    {
        title: "Contact me",
        icon:<AiIcons.AiOutlineMessage/>,
        link: "/contact",
        cName:'nav-text'    
    },
]