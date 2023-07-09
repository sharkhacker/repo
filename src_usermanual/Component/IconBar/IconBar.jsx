import React,{useState} from 'react';
import { Iconbar_style, button_style } from './style';
import ButtonsView from './ButtonsView';
import Popup_Uniflow from './Popups/Popup_Uniflow';
import Popup_Stock from './Popups/Popup_Stock';
import Popup_Variable from './Popups/Popup_Variable'
import Popup_Source from './Popups/Popup_Source';
import Popup_Link from './Popups/Popup_Link';
import Popup_Constant from './Popups/Popup_Constant';

function IconBar({data}) {

  
  // the Iconbar will present a react component from below based on displayKey value.
  const view = {
    0 : <ButtonsView data={data} setDisplayKey={data.setDisplayKey}/>,
    1 : <Popup_Stock data={data} setDisplayKey={data.setDisplayKey}/>,
    2 : <Popup_Source data={data} setDisplayKey={data.setDisplayKey}/>,
    3 : <Popup_Uniflow data={data} setDisplayKey={data.setDisplayKey}/>,
    4 : <Popup_Link data={data} setDisplayKey={data.setDisplayKey}/>,
    5 : <Popup_Constant data={data} setDisplayKey={data.setDisplayKey}/>,
    6 : <Popup_Variable data={data} setDisplayKey={data.setDisplayKey}/>,

  }

  return (

    <div className='row' style={Iconbar_style}>
      <h4 className='justify-content-center mt pt-1 bg-secondary'>Add Element</h4>

      {/* the div below will present a react component based on the current value of 'displayKey */}
      {/* for eg: for value of displayKey = 5 => It will present Popup_Constant react component */}
      <div>{ view[data.display] }</div>
      
      
    </div>
  )
}



export default IconBar