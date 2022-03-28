import React from 'react';
import Image from 'next/image';
import tshirt from '../images/tshirt.png'

function CardWarpper() {
  return (
    <div className='card__wrapper'>
      <h4>Featured Products</h4>
      <div className='wrapper__row'>
        
      <div className='card'>
          <div className='card__image'>
            <Image alt='item image' src={tshirt} width={300} height={300}/>
          </div>
          <div className='card__title'>
            <span>Item Name</span>
            <span>Price</span>
            <button>
              Shop
            </button>
          </div>
        </div>

        <div className='card'>
          <div className='card__image'>
            <Image alt='item image' src={tshirt} width={300} height={300}/>
          </div>
          <div className='card__title'>
            <span>Item Name</span>
            <span>Price</span>
            <button>
              Shop
            </button>
          </div>
        </div>

        <div className='card'>
          <div className='card__image'>
            <Image alt='item image' src={tshirt} width={300} height={300}/>
          </div>
          <div className='card__title'>
            <span>Item Name</span>
            <span>Price</span>
            <button>
              Shop
            </button>
          </div>
        </div>
      
      </div>

      <div className='wrapper__row'>
        
        <div className='card'>
            <div className='card__image'>
              <Image alt='item image' src={tshirt} width={300} height={300}/>
            </div>
            <div className='card__title'>
              <span>Item Name</span>
              <span>Price</span>
              <button>
                Shop
              </button>
            </div>
          </div>
  
          <div className='card'>
            <div className='card__image'>
              <Image alt='item image' src={tshirt} width={300} height={300}/>
            </div>
            <div className='card__title'>
              <span>Item Name</span>
              <span>Price</span>
              <button>
                Shop
              </button>
            </div>
          </div>
  
          <div className='card'>
            <div className='card__image'>
              <Image alt='item image' src={tshirt} width={300} height={300}/>
            </div>
            <div className='card__title'>
              <span>Item Name</span>
              <span>Price</span>
              <button>
                Shop
              </button>
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default CardWarpper