import React from 'react';
import Image from 'next/image';
import tshirt from '../images/hoodk.jpg';

function ProductCard(props) {
  return (
    <div className='card'>
      <div className='card__container'> 
        <div className='card__image'>
         <Image alt='item image' src={props.image} width={250} height={250}/>
        </div>
        <div className='card__title'>
          <span>Item Name</span>
          <span>$ 32.00 </span>
          <button>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;