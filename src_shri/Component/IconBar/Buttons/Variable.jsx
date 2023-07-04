import React from 'react'
import { button_data } from '../Button_Data'
import { button_style } from '../style'

function Variable({setDisplayKey}) {

  const popVariable = () => {
    setDisplayKey(6)
  }
  return (
    <button onDragEnd={popVariable} onClick={popVariable} style={button_style} className='btn btn-light m-1'  >
        <img src={button_data[5].imgPath} alt={button_data[5].name}/>
        <span className=''>{button_data[5].name}</span>
    </button>
  )
}

export default Variable