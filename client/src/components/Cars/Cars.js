import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cars')
  .then(response => response.json())
  .then(data => setCars(data));
    //eslint-disable-next-line
  }, []);
  return (
    <>
    {
      cars.length == 0 && (
        <p>No Car Found</p>
      )
    }
    {
      cars.length > 0 && (
        cars.map(car => <CarItem car={car} />)
      )
    }
    </>
  )
}

export default Cars;
