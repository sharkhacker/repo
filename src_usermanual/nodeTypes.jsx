import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import upTriangle from './icons/flowUpTriangle.svg'
import downTriangle from './icons/flowDownTriangle.svg'
import cloud from './icons/source.svg'


export function FlowNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const imgStyle = {
    width: '25px',
  }
  

  return (
    <div className="flowNode px-2">
      {/* insert upTriangle as a image here positioned at center */}

      <div className='d-flex justify-content-center' > <img style={imgStyle} src={downTriangle} alt="" /></div> 
       <div className='border border-secondary px-2'>{data.label}</div> 
      <div className='d-flex justify-content-center' > <img style={imgStyle} src={upTriangle} alt="" /></div>
      <Handle type="source" position={Position.Right} id="rightHandle" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Top} id="topHandle" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Bottom} id="bottomHandle" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Left} id="leftHandle" isConnectable={isConnectable} />
    </div>
  );
}

export function Source({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const imgStyle = {
    width: '90px',
  }
  

  return (
    <div className="flowNode px-2">
      {/* insert upTriangle as a image here positioned at center */}

      <div className='d-flex justify-content-center' > <img style={imgStyle} src={cloud} alt="" /></div> 
       <div className='px-2 text-center'>{data.label}</div> 
      <Handle type="source" position={Position.Right} id="rightHandle" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Left} id="leftHandle" isConnectable={isConnectable} />
    </div>
  );
}
