import React, { useRef, useState } from "react";

function Popup_Source({ data, setDisplayKey }) {
  const labelRef = useRef();
  const makeNode = () => {
    //making node for the source node
    const newNode = {
      id: labelRef.current.value,
      position: { x: 0, y: 0 },
      item: 'source',
      type : 'Source',
      data: {
        name: labelRef.current.value,
        label: labelRef.current.value,
        unit: selectedUnit,
        
      },
      sourcePosition:'right',
      targetPosition:'left'
    };

    //adding constant node to the nodes
    data.setNodes([...data.nodes, newNode]);
    // console.log(data.nodes);
  };

  const cancel = () => {
    setDisplayKey(0);
  };

  const [selectedUnit, setSelectedUnit] = useState('none')
  const selectUnit = (event) => {
    setSelectedUnit(event.target.value)
  }

  return (
    <div className="boder-primary m-3">
      <h4>Enter Source details</h4>
      {/* taking input for label name and value */}
      <div className=" row form-group">
        <input
          ref={labelRef}
          type="text"
          className="m-2 form-control"
          id="label"
          placeholder="Enter label name"
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
        <button className="m-2 col btn btn-primary" onClick={makeNode}>
          Add Source
        </button>
        <button className="m-2 col btn btn-primary" onClick={cancel}>
          Cancel
        </button>
      </div>

      
    </div>
  );
}

export default Popup_Source;
