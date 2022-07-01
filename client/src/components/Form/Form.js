import React, {useState} from 'react';

const Form = () => {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    price: "",
  })

  const onChange = e => setCar({...car, [e.target.name]: e.target.value })

  return (
    <form onSubmit={async () => {
      await fetch('http://localhost:5000/cars',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...car})
      })
    }}>
      <input 
        type="text" 
        id='brand' 
        name='brand' 
        value={car.brand} 
        placeholder='please enter brand' 
        onChange={onChange}
      />
      <input 
        type="text" 
        id='model' 
        name='model' 
        value={car.model} 
        placeholder='please enter model' 
        onChange={onChange}
      />
      <input 
        type="number" 
        id='price' 
        name='price' 
        value={car.price} 
        placeholder='please enter price' 
        onChange={onChange}
      />
      <input type="submit" value={"Add Car"} />
    </form>
  )
}

export default Form;
