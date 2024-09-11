import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Footer from './Footer';

function Premium() {
  const [premiumJerseys, setPremiumJerseys] = useState([]);

  useEffect(() => {
    const fetchPremiumJerseys = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error("Failed to fetch products data");
        }
        const data = await response.json(); 
        setPremiumJerseys(data.premium);
      } catch (error) {
        console.error("Error fetching the premium jerseys:", error);
      }
    };

    fetchPremiumJerseys(); 
  }, []); 

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-slate-900 to-slate-700">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
        Premium Jerseys
      </h2>
      <Card jerseys={premiumJerseys} /> 
    </div>
  );
}

export default Premium;
