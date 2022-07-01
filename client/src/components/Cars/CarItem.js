import React from 'react'

const CarItem = ({car}) => {
  const { id, brand, model, price } = car;
  return (
    <div className='car-item'>
      <small>{id}</small>
      <h2>{brand}</h2>
      <p>{model}</p>
      <p>{price}</p>
    </div>
  )
}

export default CarItem;
