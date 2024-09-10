import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSkeleton from './CardSkeleton';

function Card({ jerseys }) {
    const navigate = useNavigate();
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
        }, 500);
    }, []);

    if (isLoading) {
        return <CardSkeleton />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-white bg-black hover:bg-gray-950 px-4 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                <span className="ml-2">Back</span>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jerseys.map((jersey) => (
                    <div
                        key={jersey.id}
                        className="bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                    >
                        <img
                            src={jersey.image}
                            alt={jersey.name}
                            className="rounded-t-2xl object-cover w-full h-48 sm:h-56 md:h-64"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{jersey.name}</h3>
                            <p className="text-gray-600 mb-4">{jersey.description}</p>
                            <p className="text-lg font-bold text-gray-900 mb-4">{jersey.price}</p>
                            <button
                                onClick={() => openWhatsApp(jersey)}
                                className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-2 rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300"
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
