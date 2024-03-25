import React from 'react'
import './aboutus.css'

const Aboutus = () => {
  return (
    <div >
      {/* <img id='elipse' src="Ellipse.png" alt="" /> */}
      <div className='aboutus-container'> 
        <div className='aboutus-left'>
            <img id='doc-with-mask' src="Frame95.png" alt="doctor with mask" />
            <img id='dots'  src="Group61.png" alt="" />
        </div>
        <div>

        <div className='aboutus-right' >
        <h3 className='GreenHeading'>Abouts Us</h3>
        <h2 className='page-heading'>Patient-Centered Care</h2>
        <br />
        <p>We are dedicated to providing exceptional dental care <br />in a warm and welcoming environment. Our team of <br />experienced, compassionate, and highly skilled <br />professionals is here to ensure your dental experience <br />is comfortable and stress-free.</p> <br />
        <h3>Our Mission</h3>
        <p>At 57Dentcare, our mission is to promote optimal oral <br />health and create lasting, confident smiles. </p>

        <button className="Learn-more-btn">Booking Now  <img className=""src="Vector.png" alt="vector" /></button>
      </div>

        </div>

      </div>

    </div>
  )
}

export default Aboutus
