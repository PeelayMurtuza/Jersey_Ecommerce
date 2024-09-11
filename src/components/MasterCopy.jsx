import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Footer from './Footer';

function MasterCopy() {
  const [masterJerseys, setMasterJerseys] = useState([]);
  
  useEffect(() => {
    const fetchMasterCopyJerseys = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error("Failed to fetch products data");
        }
        const data = await response.json(); 
        setMasterJerseys(data.mastercopy); 
      } catch (error) {
        console.error("Error fetching the master copy jerseys:", error);
      }
    };

    fetchMasterCopyJerseys(); 
  }, []); 

  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-slate-900 to-slate-700">
      <h2 className="text-2xl font-bold mb-4 pl-10 text-center text-white">Master Jerseys</h2>
      <Card jerseys={masterJerseys} />
    </div>
  );
}

export default MasterCopy;
