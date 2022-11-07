import React from "react";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import * as S from "../Styles/StyleHeader"
import Logo from "../Assets/Imgs/Raquel Logo.gif"

export default function Header(){
  return(
    <BrowserRouter>
    <S.Nav>
      <S.Logo src={Logo} alt="logo" />
      <S.Ul>
        <Link to="/" >
          <S.Li>About Me</S.Li>
          </Link>
        <Link to="/works" >
          <S.Li>Works</S.Li>
          </Link>
        <Link to="/contact" >
          <S.Li>Contact</S.Li>
          </Link>
      </S.Ul>
      </S.Nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}