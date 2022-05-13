
import React from 'react'
import stylesNavegation from './Navegation.module.css'
import isotipoOficial from '../Image/IsotipoOficial.png'
import { Link } from 'react-router-dom'

function Navegation() {
  return (
    <div className={stylesNavegation.container}>
      <nav className={stylesNavegation.navbar}>
        <div className={stylesNavegation.brand}>
          <img src={isotipoOficial} className={stylesNavegation.brand__image} alt="" />
        </div>
        <div className={stylesNavegation.content}>
          <Link to="/" className={stylesNavegation.item}>Buscar</Link>
          <Link to="/acercaDe" className={stylesNavegation.item}>Acerca de</Link>
          <span className={stylesNavegation.line}>|</span>
          <Link to="/" className={stylesNavegation.item}>ES</Link>
          <Link to="/" className={stylesNavegation.item}>US</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navegation