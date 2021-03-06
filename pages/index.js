import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import CardWarpper from '../components/cardwarpper';
import Header from '../components/header';
import Footer from '../components/footer';
import caps from '../images/caps.jpg';
import Tshirt from '../images/shirty.jpg';
import hoodies from '../images/hooda.jpg';
import Trouser from '../images/trouser.jpg';
import Hoodie from '../images/hoodk.jpg';
import Link from 'next/link';
import Image from 'next/image';
import Product from '../components/product';
import capb from '../images/shhirt.jpg';
import ant from '../images/shirto.jpg';
import cap from '../images/capf.jpg';
import capz from '../images/capi.jpg';
import Shirt from '../images/shirrt.jpg';
export default function Home() {
  return (
    <div >
      
      <Navbar/>
      <div className='head'>
          <div className='head-section'>
            {/* <span>Johnz Wear</span> */}
            <h1>
              Find All Your Amazing Styles Here.
            </h1>
            <Link href='/products'>
              Shop
            </Link>
          </div>
      </div>
      <div className='best-sellers-section'>
          <h4>
            Best Sellers
          </h4>
          <div className='best-sellers-products'>
            <Product images={capb}/>
            <Product images={Hoodie}/>
            <Product images={ant}/>
            <Product images={cap}/>
          </div>
          <div className='best-seller-view-all'>
            <Link href='/products'>
                View All
            </Link>
          </div>
      </div>
      <div className='cartegories-section'>
        <div className='cartegory-row'>
            <div className='cart'>
                <Image src={capz} width='640' height='400' />
                <div className='cart-actions'>
                  <span>
                    Caps
                  </span>
                  <Link href='/products'>
                    Shop
                  </Link>
                </div>
            </div>

            <div className='cart'>
                <Image src={Shirt} width='640' height='400' />
                <div className='cart-actions'>
                  <span>
                    Caps
                  </span>
                  <Link href='/products'>
                    Shop
                  </Link>
                </div>
            </div>
        </div>

        <div className='cartegory-row'>
            <div className='cart'>
                <Image src={Tshirt} width='640' height='400' />
                <div className='cart-actions'>
                  <span>
                    Caps
                  </span>
                  <Link href='/products'>
                    Shop
                  </Link>
                </div>
            </div>

            <div className='cart'>
                <Image src={hoodies} width='640' height='400' />
                <div className='cart-actions'>
                  <span>
                    Caps
                  </span>
                  <Link href='/products'>
                    Shop
                  </Link>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
