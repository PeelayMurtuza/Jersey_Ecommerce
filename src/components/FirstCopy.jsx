import React from 'react'
import Card from '../components/Card'

function FirstCopy () {
  const firstCopyJerseys = [
    { id: 1, name: "First Copy Jersey 1", image: "/firstcopy1.jpg", description: "Affordable first copy jersey." },
    { id: 2, name: "First Copy Jersey 2", image: "/firstcopy1.jpg", description: "Affordable first copy jersey." },
    { id: 3, name: "First Copy Jersey 3", image: "/firstcopy1.jpg", description: "Affordable first copy jersey." },
    { id: 4, name: "First Copy Jersey 4", image: "/firstcopy1.jpg", description: "Affordable first copy jersey." },
    { id: 5, name: "First Copy Jersey 5", image: "/firstcopy1.jpg", description: "Affordable first copy jersey." },
    { id: 6, name: "First Copy Jersey 6", image: "/firstcopy1.jpg", description: "Affordable first copy jersey." },
    { id: 7, name: "First Copy Jersey 7", image: "/firstcopy2.jpg", description: "Good quality first copy." }
  ]

  return (
    <div className="container mx-auto py-12 px-10 ">
      <h2 className="text-2xl font-bold mb-4">First Copy Jerseys</h2>
      <Card jerseys={firstCopyJerseys} />
    </div>
  )
}
export default FirstCopy ;
