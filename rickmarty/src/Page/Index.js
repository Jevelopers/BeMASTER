import React, { useEffect, useState } from 'react';
import stylesSearches from './Index.module.css'
import elementoImage from '../Image/ElementoImage_4.png'
import Characters from '../Components/Characters'
import Pagination from '../Components/Pagination';

function Index() {
  /**Estado de los personajes */
  const [characters, setcharacters] = useState([]);
  /**Estado de la paginacion */
  const [info, setinfo] = useState({});

  /*Obteniendo los datos principales de la API*/
  const urlPricipal = 'https://rickandmortyapi.com/api/character';
  const fetchCharacters = (urlPricipal) => {
    fetch(urlPricipal)
      .then(response => response.json())
      .then(data => {
        setcharacters(data.results);
        setinfo(data.info); 
      }) 
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(urlPricipal);

  }, [])

  /**Funciones del componente Pagination */
  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  return (
    <div className={stylesSearches.main}>
      <div className={stylesSearches.character}>
        <Characters characters = { characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>

      <div className={stylesSearches.image}>
        <img src={elementoImage} className={stylesSearches.image__img} alt="" />
      </div>
    </div>
  )
}

export default Index