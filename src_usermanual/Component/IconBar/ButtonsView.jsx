import React from 'react'
import { button_style } from './style';
import Stock from './Buttons/Stock';
import Source from './Buttons/Source';
import Flow from './Buttons/Flow'
import Variable from './Buttons/Variable';
import Link from './Buttons/Link';
import Constant from './Buttons/Constant';
function ButtonsView({data,setDisplayKey}) {
  return (
    <div className='d-inline-flex flex-wrap justify-content-center'>
        <Source data={data} button_style={button_style} setDisplayKey={setDisplayKey}/>
        <Stock data={data} button_style={button_style} setDisplayKey={setDisplayKey}/>
        <Flow data={data} button_style={button_style} setDisplayKey={setDisplayKey}/>
        <Link data={data} button_style={button_style} setDisplayKey={setDisplayKey}/>
        <Constant data={data} button_style={button_style} setDisplayKey={setDisplayKey}/>
        <Variable data={data} button_style={button_style} setDisplayKey={setDisplayKey}/>
      </div>
  )
}

export default ButtonsView