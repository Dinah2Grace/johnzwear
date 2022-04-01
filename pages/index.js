import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import CardWarpper from '../components/cardwarpper';
import Header from '../components/header';
import Footer from '../components/footer';
import caps from '../images/caps.jpg';
import Tshirt from '../images/tshirts.jpg';
import hoodies from '../images/hoodie.jpg';
import Trouser from '../images/trouser.jpg';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div >
      
      <Navbar/>
      <Header/>
      <div className='best-sellers-section'>
          <div className='best-sellers-products'>
            <div className='product'>
              
            </div>
          </div>
      </div>
      <div className='cartegories-section'>
        <div className='cartegory-row'>
            <div className='cart'>
                <Image src={caps} width='640' height='400' />
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
                <Image src={Trouser} width='640' height='400' />
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
