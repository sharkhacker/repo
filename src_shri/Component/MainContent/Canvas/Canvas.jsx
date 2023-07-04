import React,{useState, useCallback} from 'react'
import { colors } from '../../../colors'

import ReactFlow, 
  {
  Panel, SelectionMode, Background , useNodesState, useEdgesState, addEdge,Controls, MiniMap} from 'reactflow';
import 'reactflow/dist/style.css';

import {FlowNode,Source} from '../../../nodeTypes'

import DownloadButton from './downloadButton';
import SaveRestore from './SaveRestore';

import * as functions from '../MenuBar/MenuBar_functions'
import AddUnits from '../MenuBar/AddUnits/AddUnits'

import * as Toolbar from "@radix-ui/react-toolbar";




const panOnDrag = [1, 2];
// const panOnScroll = [1,2];
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
  const handleClick = () =>{
    setActive(!active);
  };

  const onNodeClick = (evt,obj) => {

    console.log(obj)
    data.setSelectedObj([])
    data.setSelectedObj(obj)
  }
  const onEdgeClick = (evt,obj) => {
    console.log(obj)
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
        panOnScroll
        panOnDrag={panOnDrag}
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        >

          <Controls />
          
          

          <MiniMap nodeStrokeWidth={3} zommable pannable/>
          <Background style={{backgroundColor: active ? colors.dark2 : "white", color:active ? "white" : colors.dark2}} gap={12} variant={variant}/>
         
          <Panel position='top-right'>
          <button className="btn btn-light" onClick={handleClick} >Light/Dark</button>
          </Panel>

          
          <Panel position='top-left'>

        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

        <div class="btn-group" role="group">
        <div class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Export As</div>
        <ul class="dropdown-menu">
        <li> <button className="dropdown-item" onClick={() => functions.downloadFile(data)}>Export as json</button></li>
        <li><DownloadButton/></li>
        </ul>
        </div>
        
         
          <button className="btn btn-light " > Load File </button>
          <button className="btn btn-light " onClick={() => functions.clear(data)}> Clear </button>
          <AddUnits className="btn btn-light " data={data}/>
          

        <div>
        <SaveRestore/>
        </div>
        
        <div class="btn-group" role="group">

        <div class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Variants</div>
        <ul class="dropdown-menu">
        <li><button className="dropdown-item" onClick={() => setVariant('dots')}>dots</button></li>
        <li><button className="dropdown-item" onClick={() => setVariant('lines')}>lines</button></li>
        <li><button className="dropdown-item" onClick={() => setVariant('cross')}>cross</button></li>
        </ul>


        </div>

        </div>

        

        </Panel>
          
        </ReactFlow>
        
        
      </div>
    </div>
    
  )
}

export default Canvas