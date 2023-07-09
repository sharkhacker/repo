import React from 'react'
import { button_data } from '../Button_Data'

function Link({button_style,setDisplayKey}) {

  const popLink = () => {
    setDisplayKey(4)
  }

  return (
    <button onDragEnd={popLink} onClick={popLink} style={button_style} className='btn btn-light m-1' >
        <img src={button_data[3].imgPath} alt={button_data[3].name}/>
        <span className=''>{button_data[3].name}</span>
    </button>
  )
}

export default Link