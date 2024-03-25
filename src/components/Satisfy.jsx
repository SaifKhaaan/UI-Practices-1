import React from 'react'
import './satisfy.css'
import Card2 from './Card2'
import CardData2 from './CardData2'

const Satisfy = () => {
  return (
    <div>
        <h3 className='GreenHeading'>Satisfy Solution</h3>
        <h2 className='page-heading'>The Best Dental Treatment</h2>
      <div>
      <div class="satisfy-card-container">
    
      <Card2 details={CardData2}/>

    </div>
      </div>
    </div>
  )
}

export default Satisfy
