import React from "react";
import "./satisfy.css";

const Card2 = (props) => {
  return (
    <div className="satisfy-card-container">
      {props.details.map((value, index) => (
        <div
          className="satisfy-card"
          key={index}
          // style={{backgroundImage:`url(${value.iimg})`}}
          style={{ backgroundColor: `${value.color}` }}
        >
        
            <div className="satisfy-card-textside">
              <div>
                {" "}
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </div>
              <div>
                <button class="read-more-btn">Read More</button>
              </div>
            </div>
          

          <div>
            <img src={value.img} alt="" srcset="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;

/* <div
className="satisfy-page-card"
// key={index}
// style={{ backgroundColor: "" }}
>
<div class="satisfy-card">
  <div>
    <h2>Card 1</h2>
    <p>Card content goes here.</p>
    <a href="#" class="read-more-btn">
      Read More
    </a>
  </div>

  <div>
    <img src={value.img} alt="" srcset="" />
  </div>
</div>
</div> */
