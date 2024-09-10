import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full ">
      <div className="container text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Peelay Murtuza Afsar . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
