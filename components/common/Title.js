import React from 'react'

const Title = (props)=> {
    return (
        <div className ={props.ustbas}>
                <div className ={props.renk}>
                  <img src={props.resim} alt="" />
                </div>
                <div className ={props.aciklama}>
                  <h3>{props.baslik}</h3>
                  <p>
                    {props.altaciklama}
                  </p>
                </div>
              </div>
           
    );
};
export default Title;
