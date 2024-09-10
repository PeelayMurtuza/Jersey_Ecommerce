import React from 'react'
import Card from '../components/Card'
import Footer from './Footer'
function  MasterCopy() {
  const masterJerseys = [
    { id: 1, name: "Master Jersey 1", image: "/master1.jpg", description: "Master-grade jersey.", price:"650 rs" },
    { id: 2, name: "Master Jersey 2", image: "/master2.jpg", description: "Master-grade jersey.", price:"650 rs" },
    { id: 3, name: "Master Jersey 3", image: "/master3.jpg", description: "Master-grade jersey.", price:"650 rs" },
    { id: 4, name: "Master Jersey 4", image: "/master4.jpg", description: "Master-grade jersey.", price:"650 rs" },
    { id: 5, name: "Master Jersey 5", image: "/master5.jpg", description: "Master-grade jersey.", price:"650 rs" },
    { id: 6, name: "Master Jersey 6", image: "/master6.jpg", description: "Master-grade jersey.", price:"650 rs" },
    { id: 7, name: "Master Jersey 7", image: "/master7.jpg", description: "Top-notch master jersey.", price:"650 rs" }
  ]

  return (
    <div className="container mx-auto py-12 bg-gradient-to-r from-slate-900 to-slate-700" >
      <h2 className="text-2xl font-bold mb-4  pl-10 text-center text-white">Master Jerseys</h2>
      <Card jerseys={masterJerseys} />
      
    </div>
  )
}

export default MasterCopy ;









