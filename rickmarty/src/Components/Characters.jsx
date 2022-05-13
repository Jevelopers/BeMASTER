import React from 'react'
import stylesCharacters from './Characters.module.css'

function Characters({ characters = [] }) {
  return (
    <div className={stylesCharacters.container}>
      {
        characters.map((item, index) => (
          <div key={index}>
            <div className={stylesCharacters.card}>
              <div className={stylesCharacters.card__content}>
                <img src={item.image} className={stylesCharacters.card__image} alt="" srcset="" />
                <h1 className= {stylesCharacters.card__title}>{item.name}</h1>
                <h2 className= {stylesCharacters.card__subtitle}>{item.origin.name}</h2>
                <h3 className= {stylesCharacters.card__subtitle}>{item.status}</h3>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters