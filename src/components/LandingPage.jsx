import React from 'react'
import Footer from './Footer'

function LandingPage() {

  const products = [
    {
      category: "Men's Clothing",
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      category: "Men's Clothing",
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      category: "Men's Clothing",
      name: "Mens Cotton Jacket",
      price: 55.99,
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      category: "Men's Clothing",
      name: "Mens Casual Slim Fit",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      category: "Jewelery",
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      image: "/placeholder.svg?height=300&width=300"
    }
  ]

  return (
    <div className='bg-yellow-400 h-screen w-full'>
      
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <div className="text-sm text-gray-500 mb-1">{product.category}</div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
            <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
<Footer/>
    </div>
  )
}

export default LandingPage