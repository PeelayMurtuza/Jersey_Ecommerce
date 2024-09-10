import React from "react";

function Card({ jerseys }) {
  const phoneNumber = '+919960866705'; 

  const openWhatsApp = (jersey) => {
    
    const message = `Check out this jersey:\n\nName: ${jersey.name}\nDescription: ${jersey.description}\nPrice: ${jersey.price}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {jerseys.map((jersey) => (
        <div
          key={jersey.id}
          className="border rounded-lg shadow-lg hover:scale-105 transition-all delay-200 ease-in-out"
        >
          <img
            src={jersey.image}
            alt={jersey.name}
            width={300}
            height={200}
            className="rounded-t-lg object-cover w-full"
            style={{ aspectRatio: "300/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">{jersey.name}</h3>
            <p className="text-gray-600">{jersey.description}</p>
            <p className="text-gray-800 font-semibold mt-2">{jersey.price}</p>
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
  );
}

export default Card;
