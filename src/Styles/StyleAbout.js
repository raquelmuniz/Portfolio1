import styled from "styled-components";

export const Div = styled.div`
width:100%;
height:92vh ;
background-color: #000000;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-end;
@media(max-width:800px){
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

export const Img = styled.img`
width: 30vw;
height: 60vh;
@media(max-width:750px){
  display:none;
}
`

export const Social = styled.section`
width: 40vw;
height: 45vh;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items:center;
@media(max-width:800px){
  width: 65vw;
  height:18vh ;
  margin-top: 5vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
`

export const Icon = styled.img`
width: 5vw;
height: 10vh;
@media(max-width:750px){
width: 10vw;
height: 7vh;
}
`

export const Figure = styled.div`
position: absolute;
bottom: 0%;
left: 0%;
width:30vw;
height: 65vh;
display: flex;
align-items: flex-end;
justify-content: center;
@media(max-width:750px){
  display: none;
  left: 25%;
  width:55vw;
  height:38vh;
}
`

export const H2 = styled.h2`
color: white;
font-family: 'Passions Conflict', sans-serif;
font-size: 1.7rem;
`
export const H4 = styled.h4`
color: white;
`
export const AboutMe = styled.div`
display:flex;
flex-direction: column;
width: 20vw;
height: 25vh;
display:flex;
align-items:center;
justify-content:center;
@media(max-width:800px){
width: 70vw;
}
`

export const Img2 = styled.img`
display:none;
@media(max-width:750px){
  display:flex;
  width:60vw;
  height:35vh;
  border-radius:50%;
}
`