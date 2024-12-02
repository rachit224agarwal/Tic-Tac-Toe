import React, { useState } from 'react'

const Square = (props) => {
  return (
    <div className='hover:bg-lime-200' onClick={props.onClick} 
                  style={{ border:"2px solid black",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                  }}>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
