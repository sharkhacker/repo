import React from 'react'
import { button_data } from '../Button_Data'
import { button_style } from '../style'

function Constant({setDisplayKey}) {

  const popConstant = () => {
    setDisplayKey(5)
  }
  return (
    <button onClick={popConstant} style={button_style} className='btn btn-light m-1'  >
        <img src={button_data[4].imgPath} alt={button_data[4].name}/>
        <span className=''>{button_data[4].name}</span>
    </button>
  )
}

export default Constant