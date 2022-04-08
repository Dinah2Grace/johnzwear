import React from 'react';
import Image from 'next/image';
import tshirt from '../images/tshirt.png';
import Link from 'next/link';
import Tshirt from '../images/tshirts.jpg';
import hoodies from '../images/hoodie.jpg';
import Trouser from '../images/trouser.jpg';
import Hoodie from '../images/hoodk.jpg';
import Product from '../components/product';
import capb from '../images/shhirt.jpg';
import caps from '../images/caps.jpg';

function Productview() {
  return (
    <div>
      <div className='nav__links'><span><Link href='/'> Home</Link> /</span><span><Link href='/'> Shirts</Link>  /</span><span>product name </span></div>
      <div className='product__container'>
        <div className='section-1'>
          
          <div className='active__image_section'>
            <Image src={tshirt} width={500} height={500}/>
          </div>
        </div>
        <div className='section-2'>

          <h3>
            Item namme
          </h3>
          <span className='product__price'>Price</span>
          <div className='select__product__size'>
            <span className='select__product__size_title'>Select size</span>
            <div className='product__size'>
              <span>
                S
              </span>
              <span>
                M
              </span>
              <span>
                L
              </span>
              <span>
                XL
              </span>
              <span>
                XXL
              </span>
            </div>
            <div className='add__to__cart__section'>
              <div className='select__qty'>
                <span>Select Quanty</span>
                <div className='add__to__cart_btn'>
                  <input type='number' value={1} className='input'/>
                  <button className='add__cart__btn'>Add to Cart</button>
                </div>
              </div>
              
            </div>
            <div className='product__details'>
              <h5>More Details</h5>
              <ul>
                <li>
                  52% Combed and Ringspun Cotton, 48% Poly Fleece
                </li>
                <li>
                  52% Combed and Ringspun Cotton, 48% Poly Fleece
                </li>
              </ul>
            </div>
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
      
     
    </div>
  )
}

export default Productview