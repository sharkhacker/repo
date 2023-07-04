import React from 'react'
import { button_data } from '../Button_Data'

function Flow({button_style,setDisplayKey}) {
  const popFlow = () => {
    setDisplayKey(3)
  }
  return (
    <button onDragEnd={popFlow} onClick={popFlow} style={button_style} className='btn btn-light m-1'  >
        <img src={button_data[2].imgPath} alt={button_data[2].name}/>
        <span className=''>{button_data[2].name}</span>
    </button>
  )
}

export default Flow