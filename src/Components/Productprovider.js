
    import React, { createContext } from 'react'

    export const productelement=createContext()

    export default function Productprovider({children}) {
        const electricalProducts = [
            {
                id: 1,
                title: "Copper Electrical Wire",
                price: 350,
                image: "https://via.placeholder.com/150",
                description: "High-quality copper wire for home and industrial wiring. Heat-resistant and long-lasting.",
            },
            {
                id: 2,
                title: "Modular Switch",
                price: 120,
                image: "https://via.placeholder.com/150",
                description: "Sleek and durable modular switch for smooth operation and modern look.",
            },
            {
                id: 3,
                title: "LED Tube Light",
                price: 450,
                image: "https://via.placeholder.com/150",
                description: "Energy-efficient LED tube light with bright white output for homes and offices.",
            },
            {
                id: 4,
                title: "Power Socket 3-Pin",
                price: 90,
                image: "https://via.placeholder.com/150",
                description: "Standard 3-pin power socket with safety shutters and high durability.",
            },
            {
                id: 5,
                title: "Ceiling Fan Regulator",
                price: 200,
                image: "https://via.placeholder.com/150",
                description: "Fan regulator with smooth control and long-lasting build for efficient speed management.",
            },
            {
                id: 6,
                title: "Miniature Circuit Breaker (MCB)",
                price: 300,
                image: "https://via.placeholder.com/150",
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




    