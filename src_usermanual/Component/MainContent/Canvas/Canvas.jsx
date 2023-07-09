import React,{useState} from 'react'
import { colors } from '../../../colors'

import ReactFlow, 
  {
  SelectionMode,
  Background ,
  Controls,
  MiniMap} from 'reactflow';
import 'reactflow/dist/style.css';

import {FlowNode,Source} from '../../../nodeTypes'
import MenuBar from '../MenuBar/MenuBar';

// import * as Toolbar from "@radix-ui/react-toolbar";



const panOnDrag  = [1,2];
const edgeOptions = {animated : true};


const nodeTypes = {
  FlowNode: FlowNode,
  Source:Source
}


function Canvas({data}) {

  const style = {
    height : '100vh',
  }
  const [variant, setVariant] = useState('cross');
  const [active,setActive] = useState(false);
 

  // setSelectedObj will be updated on clicking specific node/edge
  // which will then accordingly show the edit options in property bar
  const onNodeClick = (evt,obj) => {
    console.log(obj)
    data.setSelectedObj([])
    data.setSelectedObj(obj)
  }

  const onEdgeClick = (evt,obj) => {
    // console.log(obj)
    data.setSelectedObj([])
    data.setSelectedObj(obj)
  }


  return (
    
   
    <div className='Canvas' style={style}>
      
      <div style={{ height: '100%' }}>
      
     
        <ReactFlow 

        nodes={data.nodes}
        edges={data.edges}
        
        nodeTypes={nodeTypes}

        onNodesChange={data.onNodesChange}
        onEdgesChange={data.onEdgesChange}

        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        
       
        snapToGrid={true}
        fitView
        attributionPosition="bottom-left"

        defaultEdgeOptions={edgeOptions}
        selectionOnDrag
        selectionMode={SelectionMode.Partial}

        panOnDrag={panOnDrag}
        >
        
          <Controls />
          
          

          <MiniMap nodeStrokeWidth={3} zommable pannable/>
          <Background style={{backgroundColor: active ? colors.dark2 : "white", color:active ? "white" : colors.dark2}} gap={12} variant={variant}/>
          <MenuBar data={data} setVariant={setVariant} active={active} setActive={setActive}/>
          

          
          
          
        </ReactFlow>
        
        
      </div>
    </div>
   
  )
};

export default Canvas;

