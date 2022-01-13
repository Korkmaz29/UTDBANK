import React from 'react'

const Featur = (props) => {
    return (
       
           
            <div className ="item">
              <div className ={props.ustbas}>
                <div className ={props.renk}>
                  <img src={props.resim} alt="feature" />
                </div>
                <div className ="feature-carousel-details">
                  <h3>{props.baslik}</h3>
                  <p>
                    {props.altaciklama}
                  </p>
                </div>
              </div>
            </div>
            
      
    )
}

export default Featur
