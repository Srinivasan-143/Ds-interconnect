import React from 'react'
import { assests, offer } from '../../../assets/assests'
import "./Offer.css"

const Offer = () => {
  return (
    <div className='offer'>
      <h1>What We Offer</h1>
     <div className="what-we">
        {offer.map((offer,index)=>(
        <div className={`offers ${offer.align}`} key={offer.id}>
        <img src={offer.img} alt="" />
        <div className='desclass'>
        <h2 className="descrption">{offer.descrption}</h2>
      </div>
      </div>
      ))
      }
      </div> 
    </div>
  )
}
export default Offer
