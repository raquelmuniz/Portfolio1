import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
}
`;

export const Nav = styled.nav`
width: 100%;
height: 8vh;
display:flex;
flex-direction:row;
justify-content: space-evenly;
background-color: #000000;
`

export const Ul = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 85vw;
@media(max-width:800px){
  height: 10vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #000000;
  width:100%;
  height: 8vh;
}
`

export const Li = styled.li`
width: 10vw;
display: flex;
justify-content:center;
font-family: "Source Sans Pro", sans-serif;
color: #a4133c;
border:solid;
@media(max-width:800px){
  width: 25vw;
  color: #f15bb5;
  border:none;
  color: #ffffff;
  background-color: #ff206e;
  border-radius:5px 5px 5px 5px;
  width: 22vw;
}
&:hover{
  cursor:pointer;
  color: #ffffff;
  border:none;
  background-color: #a4133c;
  transition: all .6s;
}
`

export const Logo = styled.img`
width: 10vw;
height: 18vh;
@media(max-width:800px){
  display:none;
}
`