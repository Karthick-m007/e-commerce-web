import React, { useContext } from 'react';
import ScrollFloat from '../ReactBits/ScrollFloat';
import { productelement } from './Productprovider';

export default function Products() {
  const electricalProducts = useContext(productelement);

  return (
    <div className='mx-4 md:mx-20 my-10'>
      <h6 className='font-bold flex justify-center text-sm mb-6'>
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

      <div className='flex gap-6 justify-center flex-wrap'>
        {electricalProducts && electricalProducts.map((ele, id) => (
          <div
            key={id}
            className={`rounded-lg shadow-md w-72 overflow-hidden transition-transform hover:scale-105 duration-300 ${ele.color}`}
          >
            <img
              src={ele.image}
              alt={ele.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h5 className={`text-lg font-semibold mb-1 ${ele.textColor}`}>{ele.title}</h5>
              <p className="text-sm text-gray-700 mb-1">₹{ele.price}</p>
              <p className="text-sm text-gray-600">{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
