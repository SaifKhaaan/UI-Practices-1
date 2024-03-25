import React from 'react';
import './freeconsultation.css';

const FreeConsultation = () => {
  return (
   
      <div className='consultation-card'>
        <div className='consultation-card-img'><img src="image34.png" alt="" /></div>
        <div>
          <h2>Free Consultation</h2>
          <div>
            <div>
            <input className='input-field' type="text" placeholder='Full Name*' />
            <input className='input-field' type="text" placeholder="I'm interested in*" />
            </div><br />
           <div>
           <input className='input-field' type="Email" placeholder='Email*' />
            <input className='input-field' type="number" placeholder='Phone Number*' />
           </div>
            
          </div>
          <div> <button className='Free-btn'>Get a Free Consultation <img src="Vector1.png" alt="" /></button> </div>
        </div>
      </div>

  )
}

export default FreeConsultation;
