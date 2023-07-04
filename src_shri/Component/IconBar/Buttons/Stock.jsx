import React from 'react'
import { button_data } from '../Button_Data'

function Stock({button_style,setDisplayKey}) {


  const popStock = () => {
    setDisplayKey(1)
  }
  return (
    <button onDragEnd={popStock} onClick={popStock} style={button_style} className='btn btn-light m-1'  >
        <img src={button_data[0].imgPath} alt={button_data[0].name}/>
        <span className=''>{button_data[0].name}</span>
    </button>
  )
}

export default Stock