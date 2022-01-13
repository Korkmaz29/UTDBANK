import React from 'react'

const ServiceTitle = (props) => {
    return (

      <div className ={props.item}>
      <div className ={props.det}>
        <div className ={props.serv}>
          <img src={props.resim} alt={props.ozellik} />
        </div>
        <div className ={props.text}>
          <h3>{props.bas}</h3>
          <p>
          {props.lor}
          </p>
          <a href="service-details.html">Read More +</a>
        </div>
      </div>
    </div>           
 

    )
}

export default ServiceTitle
