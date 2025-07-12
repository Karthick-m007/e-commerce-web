
    import React, { createContext } from 'react'
import image1 from "../assets/finolex-electrical-wires-500x500.webp"
import image2 from "../assets/hi-fi-switch.jpg"
import image3 from "../assets/cromtptonlight.webp"
import image4 from "../assets/topcs.jpeg"
import image5 from "../assets/fanregulator.webp"
import image6 from "../assets/mcbs.jpeg"

    export const productelement=createContext()

    export default function Productprovider({children}) {
        const electricalProducts = [
            {
                id: 1,
                title: "Copper Electrical Wire",
                price: 350,
                image: image1,
                description: "High-quality copper wire for home and industrial wiring. Heat-resistant and long-lasting.",
            },
            {
                id: 2,
                title: "Modular Switch",
                price: 120,
                image: image2,
                description: "Sleek and durable modular switch for smooth operation and modern look.",
            },
            {
                id: 3,
                title: "LED Tube Light",
                price: 450,
                image: image3,
                description: "Energy-efficient LED tube light with bright white output for homes and offices.",
            },
            {
                id: 4,
                title: "Power Socket 3-Pin",
                price: 90,
                image: image4,
                description: "Standard 3-pin power socket with safety shutters and high durability.",
            },
            {
                id: 5,
                title: "Ceiling Fan Regulator",
                price: 200,
                image: image5,
                description: "Fan regulator with smooth control and long-lasting build for efficient speed management.",
            },
            {
                id: 6,
                title: "Miniature Circuit Breaker (MCB)",
                price: 300,
                image: image6,
                description: "Reliable MCB for protecting home circuits from overload and short circuit.",
            },
        ];

        const data=electricalProducts


    return (

        <productelement.Provider value={data}>
            {children}
            
        </productelement.Provider>
        
       
    )
    }




    