import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'



export const Cards = () => {
    const params = useParams()
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
    // console.log(data)
    getdata()
    const filtered_data = products.filter((pro) => {
        return pro.id == params.id
    })
    const Back_To_Home = () => {
        navigate(`/Homepage`)
    }
    // console.log(filtered_data)


    const Add_To_Cart = () => {
        Swal.fire({
            title: "Sorry User It,s a Demo Website",
            confirmButtonText: 'OK',
            icon: 'info',
            confirmButtonColor: 'blue',
            background: 'black',
            color: 'white'
        })
    }

    return (
        <>
            {
                filtered_data.map((item, index) => {
                    const { id, title, price, image, category, description } = item
                    const { rate, count } = item.rating;
                    return < div key={index} className="main-card" >
                        <img className="product-image" src={image} alt={image} />
                        <div className="product-details">
                            <div className='product-Heading'><h1>Product Description Page</h1></div><br />
                            <h2 className="product-title">Product Title {title}</h2>
                            <p className="product-category">Electronics {price}</p>
                            <p className="product-category">Electronics {category}</p>
                            <p className="product-price">Ratings :<br /> rate : {rate}  count : {count} </p>
                            <h2 className="product-title">Description</h2>
                            <p className="product-category">{description}</p>
                            <button className="add-to-cart-btn" onClick={Add_To_Cart}>Add to Cart</button>
                            <button className="add-to-cart-btn HomeBtn" onClick={Back_To_Home}>Back To Home</button>
                        </div>
                    </div>

                })
            }
        </>
    )
























}
