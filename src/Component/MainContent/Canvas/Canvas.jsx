import React,{useState, useCallback} from 'react'
import { colors } from '../../../colors'
import MenuBar from '../MenuBar/MenuBar';

import ReactFlow, {Background , useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import {FlowNode,Source} from '../../../nodeTypes'

const nodeTypes = {FlowNode: FlowNode, Source:Source}
function Canvas({data}) {
  const style = {
    height : '90vh',
    backgroundColor: 'white' 
  }

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
        >
          
          <Background />
          <Controls />
          
        </ReactFlow>
      </div>
    </div>
  )
}

export default Canvas