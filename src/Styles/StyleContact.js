import styled from "styled-components";

export const Div = styled.div`
width:100%;
height:90vh;
background-color: #000000;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

export const Form = styled.form`
width: 75%;
height: 75vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
`

export const Input = styled.input`
width: 40%;
height: 6vh;
border: 1px white;
border-radius: 15px 15px 15px 15px;

@media(max-width:800px){
width: 80%;
}
`

export const Text = styled.input`
width:40%;
height: 35vh;
border: 1px white;
border-radius: 15px 15px 15px 15px;

@media(max-width:800px){
width: 80%;
}
`

export const Button = styled.input`
width:15vw;
height: 7vh;
border-radius: 15px 15px 15px 15px;
color: #ffffff;
background-color: #ff206e;
border: #ff206e;

@media(max-width:800px){
width: 50%;
}
`

export const H1 = styled.h1`
color: white;
`