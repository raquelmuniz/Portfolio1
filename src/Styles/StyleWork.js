import styled from "styled-components";

export const Jobs = styled.section`
width:100%;
background-color: #000000;
display: flex;
align-items:center;
justify-content:space-around;
@media(max-width:800px){
  heigth: 150vh;
  border:solid;
  justify-content: flex-start;
}

`

export const Div = styled.div`
width: 80%;
height: 92vh;
border:solid;
display:flex;
flex-wrap: wrap;
flex-direction: row-reverse;
align-items: center;
justify-content: space-evenly;
@media(max-width:800px){
  height:190vh ;
  width:100%;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
}

`

export const Figure = styled.div`
width: 20vw;
height:30vh;
border-radius: 5%;
display: flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
@media(max-width:800px){
  width:55vw;
  height: 28vh;
}
`

export const Img = styled.img`
width:18vw;
height: 20vh;
border:solid black 3px;
@media(max-width:750px){
  width:40vw;
  height: 15vh;
}
`

export const H4 = styled.h4`
color: #ffffff;
background-color:#000000;
@media(max-width:800px){
  font-size:1rem;
}
`

export const P = styled.p`
font-size: 0.9rem;
color: #ffffff;
@media(max-width:800px){
  font-size:0.5rem;
}
`