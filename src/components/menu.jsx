'use client'
import Link from "next/link";
export default function Menu() {
  return (
    <header className= "header">
      <div className= "logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" 
          alt="Logo do site"
          className="logoImage"
        />
      </div>
      <nav className= "nav">
        <ul>
          <li><Link href={'/'} >Home</Link></li>
          <li><Link href={'/Sobre'} >Sobre</Link></li>
          <li><Link href={'/Doencas'} >Doenças</Link></li>
          <li><Link href={'/Equipe'} >Equipe</Link></li>
          <li><Link href={'/javaApi'} >Tabela Api</Link></li>
          <li><Link href={'/javaApi2'} >Tabela Api2</Link></li>
          <li><Link href={'/javaApi3'} >Tabela Api3</Link></li>
          <li><Link href={'/Login'} id="linkLogin">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}
