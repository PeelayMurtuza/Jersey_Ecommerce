import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Footer from './Footer';

function FirstCopy() {
  const [firstCopyJerseys, setFirstCopyJerseys] = useState([]);

  useEffect(() => {
    const fetchFirstCopyJerseys = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error("Failed to fetch products data");
        }
        const data = await response.json(); 
        setFirstCopyJerseys(data.firstcopy); 
      } catch (error) {
        console.error("Error fetching the first copy jerseys:", error);
      }
    };

    fetchFirstCopyJerseys(); 
  }, []); 
  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-slate-900 to-slate-700">
      <h2 className="text-2xl font-bold mb-4 pl-10 text-center text-white">First Copy Jerseys</h2>
      <Card jerseys={firstCopyJerseys} /> 
    </div>
  );
}

export default FirstCopy;
