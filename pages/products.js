import React from 'react';

import Image from 'next/image';
import Navbar from '../components/navbar';
import CardWarpper from '../components/cardwarpper'
import tshirt from '../images/tshirt.png'
import Footer from '../components/footer';
import Productview from '../components/productview';
import Product from '../components/product';
import { products } from '../data/products';

// import capb from '../images/pexels-nathan-j-hilton-5343089.jpg'
import capb from '../images/shhirt.jpg';
import shirt from '../images/shirtq.jpg';
import hoody from '../images/hoodk.jpg';
import capy from '../images/capf.jpg';
import shirty from '../images/shirto.jpg';
import shirrt from '../images/shirteleven.jpg';
import shsty from '../images/hooda.jpg';
import cappy from '../images/cape.jpg';


function Products() {
  return (
    <div>
      <Navbar/>
        <div className='product-name'>
            {/* <Image width="1440" height="650" src={capb}></Image> */}
            <h5>All Products</h5>

        </div>

        <div className='products__container'>
            <div className='product_row'>
                <Product images={products.image} productName={products.name} productPrice={products.price}/>
                <Product images={tshirt}/>
                <Product images={hoody}/>
                <Product images={capy}/>
            </div>
            <div className='product_row'>
                <Product images={shirty}/>
                <Product images={shsty}/>
                <Product images={cappy}/>
                <Product images={shirrt}/>
            </div>
            <div className='product_row'>
                <Product images={capb}/>
                <Product images={capb}/>
                <Product images={capb}/>
                <Product images={capb}/>
            </div>
        </div>
        

     
     

      <Footer/>
    </div>
  )
}

export default Products