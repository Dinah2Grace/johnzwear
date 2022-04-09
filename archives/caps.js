import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ProductCard from '../components/productcard'
import tshirt from '../images/capi.jpg';
import cap2 from '../images/cape.jpg';
function Caps() {
  return (
    <div className='hoodies'>
        <Navbar/>

        <div className='hoodies__header'>
            <h3>Caps</h3>
        </div>
        <div className='mini__nav'>
            <div>
                <Link href='/'>Home</Link> 
                <span>/</span>
                <Link href='/clothing'>Clothing</Link> 
                <span>/</span>
                <span>Caps</span>
            </div>
        </div>
        <div className='hoodies__display'>
            <div className='display__row'>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
            </div>
            <div className='display__row'>
                <ProductCard image={cap2}/>
                <ProductCard image={cap2}/>
                <ProductCard image={cap2}/>
                <ProductCard image={cap2}/>

            </div>
            <div className='display__row'>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
            </div>
            <div className='display__row'>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
                <ProductCard image={tshirt}/>
            </div>


        </div>
        <Footer/>
    </div>
  )
}

export default Caps