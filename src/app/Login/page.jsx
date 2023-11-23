"use client"
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
 
export default function Login(){
 
  const [login, setlogin] = useState({ email: "", senha: "" })
 
  const handleChange = (e) => setlogin({ ...login, [e.target.name]: e.target.value })
 
  const handleSubmit = async (e) => {
   
    e.preventdefault()
    try {
      const api = await axios.get("http://localhost:8080/demo/webapi/login")
      const pacientes = api.data
      const paciente = pacientes.find((paciente) => paciente.email === login.email && paciente.senha === login.senha)
      if (paciente)
      {
        sessionStorage.setItem("login", JSON.stringfy(login))
        window.location = "/"
      } else{Error}
     
 
    } catch (error) {
      console.error("Erro 404 - Not Found", error)
    }
  }
 
  return (
    <div className="authContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input value={login.email} onChange={handleChange} type="email" id="email" name="email" required />
 
        <label htmlFor="password">Senha:</label>
        <input value={login.senha} onChange={handleChange} type="password" id="password" name="senha" required />
 
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <Link href="/Cadastro/0">Cadastre-se</Link>
      </p>
    </div>
  );
}
 