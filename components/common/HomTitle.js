import React from 'react'

const HomTitle = (props) => {
    return (
        <div className ={props.bas}>
                    <img src={props.resim} alt="checl" />
                    {props.aciklama}
                  </div>
    )
}

export default HomTitle
