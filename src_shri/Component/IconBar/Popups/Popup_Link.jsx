import React, { useRef, useState, useEffect } from "react";
import ReactFlow, { Background, MarkerType } from "reactflow";

function Popup_Link({ data, setDisplayKey }) {
  const labelRef = useRef();

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
    
    const makeEdge = (sourceNode, targetNode) => {
      const edge = {
        id: `Link->${sourceNode.id}->${targetNode.id}`,
        source: sourceNode.id,
        target: targetNode.id,
        
        item: "link",
        unit: ""
      };


      data.setEdges([...data.edges, edge]);

      console.log(data.edges);
    };

    // if nodes are selected in dropdown, only then proceed to create flow
    if (selectedSource && selectedTarget) {
      const sourceNode = data.nodes.find((node) => node.id === selectedSource);
      const targetNode = data.nodes.find((node) => node.id === selectedTarget);
      console.log("source", sourceNode, "target", targetNode);

      if (sourceNode && targetNode) {
        makeEdge(sourceNode, targetNode);
      }
    }
  };


  return (
    <div className="boder-primary m-3">
      <h4>Enter Link details</h4>
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
                if (node.item != 'FlowNode')
                {
                  return <option key={node.id} value={node.id}>{node.data.label}</option>
                }})}
          </select>
        </div>

      </div>

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

export default Popup_Link;
