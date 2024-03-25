import React from 'react'


const Card = (props) => {
  return (
    <div className='booking-page-card-container'>
{props.details.map((value,index)=>(

<div className="booking-page-card" key={index}>
          <div>
            <img src={value.img} alt="" />
          </div>
          <div>
            <h4>{value.title}</h4>
          </div>
          <div>
            <p>{value.description}</p>
          </div>
        </div>

))}
      
    </div>
  )
}

export default Card
