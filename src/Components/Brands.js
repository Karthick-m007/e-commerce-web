import React from 'react'
import image from '../assets/unnamed.jpg'

export default function Brands() {
    return (
        <div className='mt-10 mb-10 lg:ms-20 lg:me-20 ms-3 me-3'>
            <h1 className='flex justify-center my-5'>
                Brands
            </h1>
            <div class="container">

                <div class="row my-10">
                    <div class="col">
                        <img src={image} alt="" className='lg:w-52 lg:h-52 w-48 h-48' />
                    </div>
                    <div class="col">
                        <h1>Legand</h1>
                        <p>"Legrand has redefined what we expect from electrical fittings. Their products combine safety, innovation, and modern design — a perfect choice for homes and businesses alike."</p>
                    </div>
                </div>


                <div class="row my-10">
                    <div class="col">
                        <h1>Legand</h1>
                        <p>"Legrand has redefined what we expect from electrical fittings. Their products combine safety, innovation, and modern design — a perfect choice for homes and businesses alike."</p>
                    </div>
                    <div class="col">
                        <img src={image} alt="" className='w-52 h-52' />
                        
                    </div>
                </div>

                <div class="row my-10">
                    <div class="col">
                        <img src={image} alt="" className='w-52 h-52' />
                    </div>
                    <div class="col">
                        <h1>Legand</h1>
                        <p>"Legrand has redefined what we expect from electrical fittings. Their products combine safety, innovation, and modern design — a perfect choice for homes and businesses alike."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
