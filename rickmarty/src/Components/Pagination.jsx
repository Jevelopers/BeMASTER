import React from 'react'
import stylesPagination from './Pagination.module.css'


const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }


  return (
    <div className={stylesPagination.nav}>
      <ul className={stylesPagination.pagination}>
        {/* Validacion de mostrar botones de acuerdo   a si se tiene un anterior o siguiente en la paginacion. */}
        {
          prev ?
            <button className={stylesPagination.pagination__link} onClick={handlePrevious}>Anterior</button>
            : null
        }
        {
          next ?
            <button className={stylesPagination.pagination__link} onClick={handleNext}>Siguiente</button>
            : null
        }
      </ul>
    </div>
  )
}

export default Pagination