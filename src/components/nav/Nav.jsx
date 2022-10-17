import React from 'react'
import './nav.css'
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')

  function changeNav(newNav) {
    setActiveNav(newNav);
  }

  const navElement = [
    {id: "#header", icon: <AiFillHome/>},
    {id: "#about", icon: <AiOutlineUser/>},
    {id: "#experience", icon: <BiBook/>},
    {id: "#services", icon: <RiServiceLine/>},
    {id: "#contact", icon: <BiMessageDetail/>},
  ].map( (elmt) => <a 
                  key={elmt.id}
                  href={elmt.id}
                  onClick={() => changeNav(elmt.id)}
                  className={activeNav === elmt.id ? 'active' : ''}>
                    {elmt.icon}
                  </a> )

  return (
    <nav>
      {navElement}
    </nav>
  )
}

export default Nav