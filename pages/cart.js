import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Product from '../components/product';
import capb from '../images/shhirt.jpg';
import Hoodie from '../images/hoodk.jpg';


function Cart() {
  return (
    <div>
      <Navbar/>
      <div className='cart-div'>
       <div>

       
          <h4>2 items in your cart</h4>
          <div className='cart-section'>
          
          <div className='cart-item'>
            <div className='cart-image'>
               <Image src={Hoodie} height='150px' width='150px'/>
            </div>
            <div className='card-details'>
              <span className='cart-item-name'>Hoodie</span>
              <p>
                This unisex, embroidered, premium t-shirt 
                feels soft and light with just the right 
                amount.
              </p>
              <div className='size_quantity'>
                <span>SIZE : XXL</span>
                <span>QUANTITY : 1</span>
              </div>
              <span className='remove_cart'>Romove from cart</span>           
            </div>
            
          </div>

          <div className='cart-item'>
            <div className='cart-image'>
               <Image src={Hoodie} height='150px' width='150px'/>
            </div>
            <div className='card-details'>
              <span className='cart-item-name'>Hoodie</span>
              <p>
                This unisex, embroidered, premium t-shirt 
                feels soft and light with just the right 
                amount.
              </p>
              <div className='size_quantity'>
                <span>SIZE : XXL</span>
                <span>QUANTITY : 1</span>
              </div>
              <span className='remove_cart'>Romove from cart</span>           
            </div>
            
          </div>
          
          </div>
        </div>

        <div className='cart-summary-section'>
          <h4>Summary</h4>
          <div className='subtotal'>
            <span>Subtotal</span>
            <span>$ 34.40</span>
          </div>
          <div className='subtotal'>
            <span>Estimated Shipping & Delivery</span>
            <span>$ 34.40</span>
          </div>
          <div className='total'>
            <span>Total</span>
            <span>$ 34.40</span>
          </div>
          <div className='check-out-btn'>
            <button>
              CHECK OUT
            </button>
          </div>
        </div>
      </div>



      <div className='best-sellers-section'>
          <h4>
            You might also like these
          </h4>
          <div className='best-sellers-products'>
            <Product images={capb}/>
            <Product images={Hoodie}/>
            <Product images={Hoodie}/>
            <Product images={Hoodie}/>
          </div>
          <div className='best-seller-view-all'>
            <Link href='/products'>
                View All
            </Link>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart