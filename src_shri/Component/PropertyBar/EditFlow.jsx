import React, { useRef, useState } from "react"
import { MarkerType } from 'reactflow';

function EditFlow({data}) {

    const valueRef = useRef();
    const equationRef = useRef();
    const [obj,setObj] = useState(data.selectedObj)


    const makeEdge = () => {


      //deleting current flowNode
      const nodes = data.nodes.filter(node => node.id !== obj.id)

      //making new flownode
      const sourceNode = data.nodes.find((node) => node.id === obj.data.sourceNodeId);
      const targetNode = data.nodes.find((node) => node.id === obj.data.targetNodeId);

      const centerX = (sourceNode.position.x + targetNode.position.x) / 2;
      const centerY = (sourceNode.position.y + targetNode.position.y) / 2;

      const newNode = {
        id: `${sourceNode.id}->${targetNode.id}`,
        position: { x: centerX, y: centerY },
        item: "FlowNode",
        data: {
          name: obj.data.name,
          label: obj.data.label,
          value: valueRef.current.value,
          type: "flownode",
          unit: selectedUnit,
          equation: equationRef.current.value,
          sourceNodeId: sourceNode.id,
          targetNodeId: targetNode.id,
        },
        type: "FlowNode",
      };
      
      console.log(obj)
      data.setNodes([...nodes,newNode])
      
    };

    const cancel = () => {
        console.log(data)
        data.setSelectedObj([])
      };

    const [selectedUnit, setSelectedUnit] = useState("");
    const selectUnit = (event) => {
        setSelectedUnit(event.target.value);
    };

  return (
    <div className=''>
        <h4>Edit {`${obj.name}`} details</h4>


        <input
          ref={valueRef}
          type="text"
          className="m-2 form-control"
          id="label"
          placeholder="Enter value"
        />

        <input
          ref={equationRef}
          type="text"
          className="m-2 form-control"
          id="label"
          placeholder="Enter equation"
        />

        {/* Dropdown for Unit */}
      <div className="dropdown">
        <span>Select a Unit : </span>
        <select value={selectedUnit} onChange={selectUnit}>
          {data.units.map((unit, index) => (
            <option key={index} value={unit}>
              {unit}
            </option>
          ))}
          <p>Selected Unit : {selectedUnit}</p>
        </select>
      </div>

      <div className=" row form-group">
        <button className="m-2 col btn btn-primary" onClick={makeEdge}>
          Save Flow
        </button>
        <button className="m-2 col btn btn-primary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default EditFlow