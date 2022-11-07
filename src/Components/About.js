import React from "react";
import * as S from "../Styles/StyleAbout";
import Me from "../Assets/Imgs/me.png";
import Insta from "../Assets/Imgs/instagram.png";
import Linkedin from "../Assets/Imgs/linkedin.png"
import Github from "../Assets/Imgs/github.png"
import ResponsiveMe from "../Assets/Imgs/raquel responsivo.jpg"

export default function About(){
  return(
    <S.Div>
      <S.Figure>
      <S.Img src={Me} alt="eu" />
      </S.Figure>
      <S.AboutMe>
      <S.H4>Hello, World! I am</S.H4>
      <S.H2>Raquel Muniz</S.H2>
      <S.H4>Front-End Developer.</S.H4>
      </S.AboutMe>
      <S.Img2 src={ResponsiveMe} alt="eu" />
      <S.Social>
        <a href="https://www.instagram.com/raquelmunizzz/">
          <S.Icon src={Insta} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/raquel-muniz-555b48205">
          <S.Icon src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/raquelmuniz">
          <S.Icon src={Github} alt="github" />
        </a>
      </S.Social>
    </S.Div>
  )
}