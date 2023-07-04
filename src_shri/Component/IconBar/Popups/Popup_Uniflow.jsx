import React, { useRef, useState, useEffect } from "react";
import ReactFlow, { Background, MarkerType } from "reactflow";

function Popup_Uniflow({ data, setDisplayKey }) {
  const labelRef = useRef();
  const valueRef = useRef();
  const equationRef = useRef();

  const cancel = () => {
    setDisplayKey(0);
  };

  const [selectedSource, setSelectedSource] = useState(null);
  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const [selectedTarget, setSelectedTarget] = useState(null);
  const handleTargetChange = (event) => {
    setSelectedTarget(event.target.value);
  };

  const handleInsertEdge = () => {
    const makeCenterNode = (sourceNode, targetNode) => {
      const centerX = (sourceNode.position.x + targetNode.position.x) / 2;
      const centerY = (sourceNode.position.y + targetNode.position.y) / 2;

      const newNode = {
        id: `${sourceNode.id}->${targetNode.id}`,
        position: { x: centerX, y: centerY },
        item: "FlowNode",
        data: {
          name: labelRef.current.value,
          label: `${labelRef.current.value}`,
          value: valueRef.current.value,
          unit: selectedUnit,
          equation: equationRef.current.value,
          sourceNodeId: sourceNode.id,
          targetNodeId: targetNode.id,
        },
        type: "FlowNode",
      };

      data.setNodes([...data.nodes, newNode]);
      console.log(data.nodes);
    };
    const makeEdge = (sourceNode, targetNode) => {
      const edgeSource = {
        id: `${sourceNode.id}->${sourceNode.id}->${targetNode.id}`,
        source: sourceNode.id,
        target: `${sourceNode.id}->${targetNode.id}`,
        targetHandle: "leftHandle",
        
        item: "flow",
        unit: "",
        equation: equationRef.current.value,

        style : {
          strokeWidth : 6
        }
      };

      const edgeTarget = {
        id: `${sourceNode.id}->${targetNode.id}->${targetNode.id}`,
        source: `${sourceNode.id}->${targetNode.id}`,
        sourceHandle: "rightHandle",
        target: targetNode.id,
        markerEnd: {
          type: MarkerType.Arrow,
        },
        item: "flow",
        unit: "",
        equation: equationRef.current.value,

        style : {
          strokeWidth : 6
        }
      };

      data.setEdges([...data.edges, edgeTarget, edgeSource]);

      console.log(data.edges);
    };

    // if nodes are selected in dropdown, only then proceed to create flow
    if (selectedSource && selectedTarget) {
      const sourceNode = data.nodes.find((node) => node.id === selectedSource);
      const targetNode = data.nodes.find((node) => node.id === selectedTarget);
      console.log("source", sourceNode, "target", targetNode);

      if (sourceNode && targetNode) {
        makeCenterNode(sourceNode, targetNode);
        makeEdge(sourceNode, targetNode);
      }
    }
  };

  const [selectedUnit, setSelectedUnit] = useState("");
  const selectUnit = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div className="boder-primary m-3">
      <h4>Enter Uniflow details</h4>
      {/* taking input for label name and value */}
      <div className=" row form-group">
        <input
          ref={labelRef}
          type="text"
          className="m-2 form-control"
          id="label"
          placeholder="Enter label name"
        />

        {/* making dropdown to select the source node */}
        <div>
          <label htmlFor="source">Source:</label>
          <select
            id="source"
            value={selectedSource}
            onChange={handleSourceChange}
          >
            <option value=""></option>
            {data.nodes.map((node) => {
                if (node.item !== 'FlowNode')
                {
                  return <option key={node.id} value={node.id}>{node.data.label}</option>
                }
})}
          </select>
        </div>

        <div>
          <label htmlFor="target">Target:</label>
          <select
            id="target"
            value={selectedTarget}
            onChange={handleTargetChange}
          >
            <option value=""></option>
            {data.nodes.map((node) => {
                if (node.item !== 'FlowNode')
                {
                  return <option key={node.id} value={node.id}>{node.data.label}</option>
                }})}
          </select>
        </div>

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
      </div>

      {/* Dropdown for Unit */}
      <div className="dropdown">
        <span>Select a Unit : </span>
        <select value={selectedUnit} onChange={selectUnit}>
          <option key='none' value='none'>none</option>
          {data.units.map((unit,index) => (
            <option key={index} value={unit}>{unit}</option>
          ))}
        </select>
        
      </div>

      <span> Selected Unit : {`${selectedUnit}`}</span>

      <div className=" row form-group">
        <button className="m-2 col btn btn-primary" onClick={handleInsertEdge}>
          Add Flow
        </button>
        <button className="m-2 col btn btn-primary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Popup_Uniflow;
