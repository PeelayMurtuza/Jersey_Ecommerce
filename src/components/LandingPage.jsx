import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/premium');
  };

  const handleBuyNowPremium = () => {
    navigate('/premium');
  };

  const handleBuyNowMaster = () => {
    navigate('/mastercopy');
  };

  const handleBuyNowFirst = () => {
    navigate('/firstcopy');
  };
  

  
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700
">

      <section className="bg-gradient-to-r  from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Best Products</h1>
          <p className="text-lg md:text-2xl mb-8">Find top-rated items at unbeatable prices.</p>
          <button
            onClick={handleShopNowClick}
            className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg text-lg hover:scale-110"
          >
            Shop Now
          </button>
        </div>
      </section>


      <section id="featured" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Premium Jersey</h3>
              <p className="text-gray-600 mb-4">Rs 1000</p>
              <button
            onClick={handleBuyNowPremium}
            className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg text-lg w-full"
          >
            Buy Now
          </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2 ">Master Jersey</h3>
              <p className="text-gray-600 mb-4">Rs 650</p>
              <button
            onClick={handleBuyNowMaster}
            className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg text-lg w-full"
          >
            Buy Now
          </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">FirstCopy jersey</h3>
              <p className="text-gray-600 mb-4 ">600 rs</p>
              <button
            onClick={handleBuyNowFirst}
            className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg text-lg w-full"
          >
            Buy Now
          </button>
            </div>
          </div>
        </div>
      </section>




      <section id="blog" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Review Post 1</h3>
              <p className="text-gray-600 mb-4">Insights and tips on how to make the most out of your shopping experience.</p>
              <a href="#" className="text-yellow-500 hover:underline">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Review Post 2</h3>
              <p className="text-gray-600 mb-4">Discover the latest trends and product recommendations in our blog.</p>
              <a href="#" className="text-yellow-500 hover:underline">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">Review Post 3</h3>
              <p className="text-gray-600 mb-4">Stay updated with our latest news and special offers directly from our blog.</p>
              <a href="#" className="text-yellow-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>


      <section id="social" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-yellow-500 hover:text-yellow-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v9h4v-9h3.5l.5-4H13V8a2 2 0 012-2h3V2z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-yellow-500 hover:text-yellow-400" aria-label="Twitter">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4.01a8.627 8.627 0 01-2.485.679A4.256 4.256 0 0021.436 2c-1.622 1.035-3.418 1.786-5.337 2.189A4.247 4.247 0 0016.91 2c-2.426 0-4.39 1.965-4.39 4.391 0 .345.038.682.107 1.006-3.642-.183-6.87-1.927-9.036-4.588A4.353 4.353 0 001.586 5.1c-.19.33-.3.693-.3 1.089 0 .751.384 1.411.967 1.801a4.256 4.256 0 01-1.988-.548v.055c0 1.053.747 1.932 1.737 2.128-.184.05-.377.077-.574.077-.142 0-.28-.014-.416-.041.282.889 1.1 1.536 2.071 1.55A8.552 8.552 0 010 19.8a12.079 12.079 0 006.57 1.927c7.88 0 12.185-6.53 12.185-12.188l-.014-.557A8.689 8.689 0 0022 4.01z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" className="text-yellow-500 hover:text-yellow-400" aria-label="Instagram">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM15 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default LandingPage;
