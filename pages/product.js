import React from 'react';

import Image from 'next/image';
import Navbar from '../components/navbar';
import CardWarpper from '../components/cardwarpper'
import tshirt from '../images/tshirt.png'
import Footer from '../components/footer';
import Productview from '../components/productview';

function Product() {
  return (
    <div>
      <Navbar/>
      
      <Productview/>

      <Footer/>
    </div>
  )
}

export default Product