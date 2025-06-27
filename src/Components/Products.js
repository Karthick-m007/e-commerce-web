import React, { useContext } from 'react'
import ScrollFloat from '../ReactBits/ScrollFloat';
import image from "../assets/unnamed.jpg"
import { productelement } from './Productprovider';

export default function Products(props) {
  const  electricalProducts =useContext(productelement)
  return (
    <div className='mx-20'>
     
      <h6 className='font-bold flex justify-center text-sm'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Our Products
        </ScrollFloat>

      </h6>
      <div className='flex gap-4 justify-center flex-wrap'>
        {
          electricalProducts && electricalProducts.map((ele, id) => (


            <div key={id} className="card" style={{ width: "18rem" }}>
              <img src={ele.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.price}</p>
                <p className="card-text">{ele.description}</p>
              </div>
            </div>
          ))
        }
   </div>


      
    </div>
  )
}
