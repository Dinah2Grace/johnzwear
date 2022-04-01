import React from 'react';
import Image from 'next/image';


function Product(props) {
  return (
    <div className='card'>
      <div className='card__container'> 
        <div className='card__image'>
         <Image alt='item image' src={props.images} width={250} height={250}/>
        </div>
        <div className='card__title'>
            <div className='card_title_name'>
            <span>Headsock</span><span>In stock</span>
            </div>
          <span>$ 32.00 </span>
          <button className='card__btn'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product;