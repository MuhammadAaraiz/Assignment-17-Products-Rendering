import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    getdata()
  }, [])
  const [products, setProduct] = useState([])
  const getdata = () => {
    const data = axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data)
        // console.log(res.data)
      })
  }
  // console.log(products)
  getdata()
  return (<>
    <div className="card-container">
      {products.map((pro, i) => {
        const { id, title, price, image, category, description } = pro
        const { rate, count } = pro.rating;
        const navigate_handle = () => {
          console.log('clicked')
          console.log(pro.id)
          navigate(`/products/${id}`)
        }
        return (
          <div key={i} className="card ">
            <img className="card-image" src={image} alt={image} />
            <div className="card-content">
              <h3 className="card-title text-center">Title : {title}</h3>
              <h3 className="card-title text-center">Price : {price}</h3>
              <h3 className="card-title text-center">category : {category}</h3>
              <h3 className="card-title text-center">Ratings :<br /> rate : {rate}  count : {count} </h3><br />
              <div className='Buttons_Div'>
                <button className="Button" variant='outlined' onClick={() => navigate_handle(id)} >
                  Show Details</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </>
  );
}
