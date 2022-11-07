import React from "react";
import * as S from "../Styles/StyleWork";
import Lol from "../Assets/Imgs/desafio lol.jpg";
import Finn from "../Assets/Imgs/desafio finn.jpg";
import Cep from "../Assets/Imgs/desafio cep.jpg"
import Recipes from "../Assets/Imgs/desafio recipes.jpg";
import Amigao from "../Assets/Imgs/desafio amigao.jpg";
import Portflow from "../Assets/Imgs/desafio portflow.jpg";

const Works = () => {
  return(
    <S.Jobs>
    <S.Div>
<S.Figure>
  <a href="https://raquelmuniz.github.io/Desafio-Pag-Login-LOL/">
  <S.Img src={Lol} alt="lol" /> 
  </a>
  <S.H4>Page LOL Login</S.H4>
  <S.P>Página de login</S.P>
</S.Figure>
<S.Figure>
  <a href="https://raquelmuniz.github.io/FinnPage/">
  <S.Img src={Finn} alt="finn" /> 
  </a>
  <S.H4>FinnPage</S.H4>
  <S.P>Página feita com position</S.P>
</S.Figure>
<S.Figure>
  <a href="https://codesandbox.io/s/buscador-cep-api-vnw-28-08-7jsymi">
  <S.Img src={Cep} alt="cep" /> 
  </a>
  <S.H4>Buscador de CEP</S.H4>
  <S.P>Página consumindo API de CEP</S.P>
</S.Figure>
<S.Figure>
  <a href="https://raquelmuniz.github.io/Desafio-Final-MOD1-Vnw---Portflow/">
  <S.Img src={Portflow} alt="portflow" /> 
  </a>
  <S.H4>Portflow</S.H4>
  <S.P>Página de estilo </S.P>
</S.Figure>
<S.Figure>
  <a href="https://codesandbox.io/s/adote-um-amiguinho-api-site-pweeq4">
  <S.Img src={Amigao} alt="amigao" /> 
  </a>
  <S.H4>Adote um Amigão</S.H4>
  <S.P>Página de adoção consumindo API</S.P>
</S.Figure>
<S.Figure>
  <a href="https://codesandbox.io/s/recipes-a-pair-programing-by-taise-jungthon-and-raquel-muniz-b4sieg">
  <S.Img src={Recipes} alt="recipes" /> 
  </a>
  <S.H4>Recipes</S.H4>
  <S.P>Página gitflow, feita em dupla</S.P>
</S.Figure>
    </S.Div>
    </S.Jobs>
  )
}

export default Works