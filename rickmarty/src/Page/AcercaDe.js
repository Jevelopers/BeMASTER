import React from 'react'
import stylesAcercaDe from './AcercaDe.module.css'

function AcercaDe() {
  return (
    <div className={stylesAcercaDe.container}>
      <div className={stylesAcercaDe.content}>
        <h1 className={stylesAcercaDe.title}>Gracias</h1>
        <h3 className={stylesAcercaDe.subtitle}>Version: 0.1.1 Fecha inicio: 11/05/2022</h3>
        <p className={stylesAcercaDe.text}>Como desarrollador Jr y me gustaría ser parte de su equipo de trabajo en su compañía. Estoy seguro que podré aprender mucho de ustedes y poner en práctica mis conocimientos, así como también, aportar en nuevas ideas.</p>
      </div>

    </div>
  )
}

export default AcercaDe