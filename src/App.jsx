import './App.css';
import { useState,useReducer } from 'react';
import IconBar from './Component/IconBar/IconBar';
import PropertyBar from './Component/PropertyBar/PropertyBar';
import Canvas from './Component/MainContent/Canvas/Canvas';
import MenuBar from './Component/MainContent/MenuBar/MenuBar';

import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, MarkerType } from 'reactflow';


function App() {

  const app_style = {
    minHeight : '100vh'
  }

  const [nodes, setNodes, onNodesChange] = useNodesState([
  {
    id: 'A',
    position: { x: 0, y: 0 },
    data: { label: 'New nodes will be inserted here' },
  },
  {
    id: 'B',
    position: { x: 200, y: 0 },
    data: { label: 'Press Backspace to delete nodes' },
  },
]);


  const [edges, setEdges, onEdgesChange] = useEdgesState( []);
  const [units, setUnits] = useState([])
  const [selectedObj, setSelectedObj] = useState({})
  const [display,setDisplayKey] = useState(0)

  const data = {
    nodes:nodes,
    edges:edges,
    setNodes: setNodes,
    setEdges: setEdges,
    onNodesChange: onNodesChange,
    onEdgesChange: onEdgesChange,

    units: units,
    setUnits: setUnits,

    selectedObj: selectedObj,
    setSelectedObj:setSelectedObj,

    display:display,
    setDisplayKey:setDisplayKey,
    // popups and rest might be implemented as well
  }

  return (
    <div className="app row p-0" style={app_style}>

      <div className="col-3 Bar">
        <IconBar data={data}></IconBar>
        <PropertyBar data={data} ></PropertyBar>
      </div>  
      <div className="col-9 MainContent justify-content-center p-0">
        <MenuBar data={data}/>
        <Canvas data={data}/>
      </div>

    </div>
  );
}

export default App;
