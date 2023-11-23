"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Cadastro({ params }) {

  const prodId = params.id == 0 ? '' : params.id

  const [novo, setNovo] = useState({
    nome: "",
    email: "",
    senha: ""
  })

  let metodo = "post"
  if (prodId) metodo = "put"

  const handleChange = e => {
    setNovo({ ...novo, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:8080/demo/webapi/users/${prodId}`,{
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novo)
    })
    .then(window.location = '/login')
    .catch(error => console.error(resp))
}

useEffect(() => {
  if (prodId) {
    fetch(`http://localhost:8080/demo/webapi/users/${prodId}`)
        .then(resp => resp.json())
        .then(resp => setNovo(resp))
        .catch(error => console.error(error))
    }
}, [prodId])


return (
  <div className="authContainer">
    <h1>Cadastro</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="nome" required value={novo.nome} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required value={novo.email} onChange={handleChange}/>

      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" name="senha" required value={novo.senha} onChange={handleChange}/>

      <button type="submit">Cadastrar</button>
    </form> 
    <p>
      Já tem uma conta? <Link href="/Login">Faça login</Link>
    </p>
  </div>
);
}
