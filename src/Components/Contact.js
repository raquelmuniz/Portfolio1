import React,{useState} from "react";
import emailjs from "@emailjs/browser";
import * as S from "../Styles/StyleContact";

export default function Contact(){

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

function sendEmail(e){
  e.preventDefault();
  if(name === '' || email === '' || message === ''){
    alert("Preencha todos os campos");
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }

  emailjs.send("service_qnyg7nc", "template_47xfvkw", templateParams, "SR3zfmyaXNMoUpqUb")
  .then((res)=>{
    console.log("Email Enviado", res.status, res.text)
    setName('')
    setEmail('')
    setMessage('')
  }, (err) => {
    console.log("ERROR: ", err)
  } )
}

  return(
    <S.Div>
      <S.H1>Contato</S.H1>
      <S.Form onSubmit={sendEmail}>
        <S.Input type="text" placeholder="Digite aqui seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name} />
        <S.Input type="email" placeholder="Digite aqui seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
          value={email} />
        <S.Text type="text" placeholder="Escreva aqui sua mensagem"
        onChange={(e) => setMessage(e.target.value)}
        value={message} />
        <S.Button type="submit" value="Enviar" />
      </S.Form>
    </S.Div>
  )
}