import React from 'react';
import Card from '../components/Card';
import Footer from './Footer';

function Premium() {
  const premiumJerseys = [
    { id: 1, name: "Premium Jersey 1", image: "/premium1.jpg", description: "High-quality premium jersey." },
    { id: 2, name: "Premium Jersey 2", image: "/premium1.jpg", description: "High-quality premium jersey." },
    { id: 3, name: "Premium Jersey 3", image: "/premium1.jpg", description: "High-quality premium jersey." },
    { id: 4, name: "Premium Jersey 4", image: "/premium1.jpg", description: "High-quality premium jersey." },
    { id: 5, name: "Premium Jersey 5", image: "/premium1.jpg", description: "High-quality premium jersey." },
    { id: 6, name: "Premium Jersey 6", image: "/premium1.jpg", description: "High-quality premium jersey." },
    { id: 7, name: "Premium Jersey 7", image: "/premium2.jpg", description: "Luxurious and comfortable." },
    { id: 8, name: "Premium Jersey 8", image: "/premium2.jpg", description: "Luxurious and comfortable." },
    { id: 9, name: "Premium Jersey 9", image: "/premium2.jpg", description: "Luxurious and comfortable." }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Premium Jerseys
      </h2>
      <Card jerseys={premiumJerseys} />
      <Footer />
    </div>
  );
}

export default Premium;
