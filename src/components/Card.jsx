import React, { useState, useEffect } from 'react';
import CardSkeleton from './CardSkeleton';

function Card({ jerseys }) {
    const phoneNumber = '+919960866705';

    const openWhatsApp = (jersey) => {
        const message = `Check out this jersey:\n\nName: ${jersey.name}\nDescription: ${jersey.description}\nPrice: ${jersey.price}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData({ title: 'Card Title', description: 'Card Description' });
            setIsLoading(false);
        }, 800);
    }, []);

    if (isLoading) {
        return <CardSkeleton />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jerseys.map((jersey) => (
                    <div
                        key={jersey.id}
                        className="border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                        <img
                            src={jersey.image}
                            alt={jersey.name}
                            className="rounded-t-lg object-cover w-full h-48 sm:h-56 md:h-64"
                            style={{ aspectRatio: "300/200" , animation: 'rotateX 5s infinite' }}
                        />
                        <div className="p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{jersey.name}</h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-2">{jersey.description}</p>
                            <p className="text-gray-800 font-semibold text-sm sm:text-base mb-2">{jersey.price}</p>
                            <button
                                onClick={() => openWhatsApp(jersey)}
                                className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600 transition duration-300"
                            >
                                Contact on WhatsApp
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
