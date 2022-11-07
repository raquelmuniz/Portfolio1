import React from "react";
import * as S from "./Styles/StyleHeader"
import Header from "./Components/Header";

export default function App(){
  return(
    <div>
      <S.GlobalStyle />
      <Header />
    </div>
  )
}