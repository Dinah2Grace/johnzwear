import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import CardWarpper from '../components/cardwarpper';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div >
      
      <Navbar/>
      <Header/>
      
      <CardWarpper/>
      <div className='container'>
        <div>
          <div>
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
