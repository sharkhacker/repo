import React from 'react'
import { button_data } from '../Button_Data'
import { button_style } from '../style'


//constant Button Implementation similarly all buttons implemented in buttons section 
function Constant({setDisplayKey}) {

  const popConstant = () => {
    setDisplayKey(5)
  }
  return (
    <button className='btn btn-light m-1' onDragEnd={popConstant}  onClick={popConstant} style={button_style}  >
        <img src={button_data[4].imgPath} alt={button_data[4].name}/>
        <span className=''>{button_data[4].name}</span>
    </button>
  )
}

export default Constant