import React, { useRef, useState } from "react";


function Popup_Stock({ data, setDisplayKey }) {

   
  const labelRef = useRef();
  const valueRef = useRef();
  const makeNode = () => {
    //making node for stock
    const newNode = {
      id: labelRef.current.value,
      position: { x: 0, y: 0 },
      item: 'stock',
      data: {
        name: labelRef.current.value,
        label: `${labelRef.current.value}`,
        value: valueRef.current.value,
        type: "FlowNode",
        unit: selectedUnit,
      },
      // type: "Stock",
      sourcePosition:'right',
      targetPosition:'left',
      // create handles on bottom and top as well
      

    };

    //adding stock node to nodes
    data.setNodes([...data.nodes, newNode]);
    // console.log(data.nodes);
  };
  
  //setting view of iconbar to default 'buttonsView'
  const cancel = () => {
    setDisplayKey(0);
  };

  const [selectedUnit, setSelectedUnit] = useState('none')
  const selectUnit = (event) => {
    setSelectedUnit(event.target.value)
  }

  return (
    <div className="boder-primary m-3">
      <h4>Enter Stock details</h4>
      {/* taking input for label name and value */}
      <div className=" row form-group">
        <input
          ref={labelRef}
          type="text"
          className="m-2 form-control"
          id="label"
          placeholder="Enter label name"
        />
        <input
          ref={valueRef}
          type="text"
          className="m-2 form-control"
          id="value"
          placeholder="Enter value"
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
          Add Stock
        </button>
        <button className="m-2 col btn btn-primary" onClick={cancel}>
          Cancel
        </button>
      </div>

      
    </div>
  );
}

export default Popup_Stock;
