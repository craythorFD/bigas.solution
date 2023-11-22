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
          <li><Link href={'/'} >página1</Link></li>
          <li><Link href={'/'} >página1</Link></li>
          <li><Link href={'/'} >página1</Link></li>
          <li><Link href={'/'} id="linkLogin">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}
