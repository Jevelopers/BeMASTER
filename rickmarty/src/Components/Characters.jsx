import React from 'react'
import stylesCharacters from './Characters.module.css'

function Characters({ characters = [] }) {
  return (
    <div className={stylesCharacters.main}>
      {
        characters.map((item, index) => (
          <div key={index} className={stylesCharacters.content}>
            <div className={stylesCharacters.card}>
              <div className={stylesCharacters.content}>
                <div className={stylesCharacters.image}>
                  <img src={item.image} className={stylesCharacters.image__avatar} alt="" srcset="" />
                </div>
                <div className={stylesCharacters.info}>
                  <h1 className={stylesCharacters.info__title}>{item.name} </h1>
                  <h3 className={stylesCharacters.info__subtitle}>{item.species} </h3>

                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters