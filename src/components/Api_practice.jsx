import React, { useEffect, useState } from 'react';
// import IMG from '../assets/img.jpg';
import './Api_practice.css';
import axios from 'axios';

const Api_practice = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetch_data = async () => {
            const api_obj = await axios.get('https://fakestoreapi.com/products')
            console.log("OBJECT", api_obj);
            setData([...api_obj.data])
            console.log("Array", data);
        };
        fetch_data();
    }, [])
    console.log("OUtside function",data);
    

    return (
        <>

            <h1>Api Integration Practice</h1>
            <div className="main">
                {
                    data.map((value,index)=>{
                        return(
                        <div key={index} className="card">
                            <div className="top">
                                <img src={value.image} alt="" />
                            </div>
                            <div className="bottom">
                                <h1>{value.title}</h1>
                                <p>{value.description}</p>
                                <h4>Price : {value.price}/-</h4>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                      )  })
                }

            </div>
        </>
    )
}

export default Api_practice