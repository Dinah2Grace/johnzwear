import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function Product(props) {
  return (
    <div className='card'>
      <div className='card__container'> 
        <div className='card__image'>
         <Image alt='item image' src={props.images} width={200} height={250}/>
        </div>
        <div className='card__title'>
            <div className='card_title_name'>
            <span>{props.productName}</span><span>In stock</span>
            </div>
          <span>{props.productPrice} </span>
          <Link href='/product' className='card__btn'>
            Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product;