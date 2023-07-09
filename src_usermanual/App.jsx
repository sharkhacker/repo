import './App.css';
import { useState} from 'react';
import IconBar from './Component/IconBar/IconBar';
import PropertyBar from './Component/PropertyBar/PropertyBar';
import Canvas from './Component/MainContent/Canvas/Canvas';


import  {useNodesState, useEdgesState } from 'reactflow';


function App() {

  const app_style = {
    minHeight : '100vh'
  }
  
// all the data related to flow diagram has been initialised here
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

  // edges,nodes,etc are sent in 'data' obj as props.
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
  }

  return (
    <div className="app row p-0" style={app_style}>

      {/* Left column of screen */}
      <div className="col-3 Bar">
        <IconBar data={data}></IconBar>
        <PropertyBar data={data} ></PropertyBar>
      </div>  

      {/* Main screen containing Canvas*/}
      <div className="col-9 MainContent justify-content-center p-0">
        <Canvas data={data}/>
      </div>

    </div>
  );
}

export default App;
