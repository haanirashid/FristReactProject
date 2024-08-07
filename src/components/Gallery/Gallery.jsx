import React from 'react'
import './Gallery.css';
import IMG from '../../assets/pizza.jpg';
import { Items } from '../../Global.js';

const Gallery = () => {

    return (
        <>
            <div className="main">
                {Items.map((value,index)=>{
                    return(
                <div key={index} className="photos">
                    <div className="top">
                        <h1>{value.title}</h1>
                    </div>
                    <div className="bottom">
                        <img src={value.img} alt="" />
                    </div>
                </div>
                    )
                })}
            
            </div>
        </>
    )
}

export default Gallery