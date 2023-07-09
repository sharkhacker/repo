import React, { useRef, useState } from 'react'

function Popup_Variable({ data, setDisplayKey }) {

  const labelRef = useRef();
  const valueRef = useRef();
  const equationRef = useRef();

  const makeNode = () => {
    const newNode = {
      id: labelRef.current.value,
      position: { x: 0, y: 0 },
      item: 'variable',
      data: {
        label: `${labelRef.current.value} ${valueRef.current.value}`,
        value: valueRef.current.value,
        unit: ""
      },
      style: {
        border: "0px groove blue",
        padding: 10,
      },
      sourcePosition:'right',
      targetPosition:'left',
    };

    data.setNodes([...data.nodes, newNode]);
    console.log(data.nodes);
  };

  const cancel = () => {
    setDisplayKey(0);
  };

  const [selectedUnit, setSelectedUnit] = useState('')
  const selectUnit = (event) => {
    setSelectedUnit(event.target.value)
  }

  return (
    <div className="boder-primary m-3">
      <h4>Enter Variable details</h4>
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
        <button className="m-2 col btn btn-primary" onClick={makeNode}>
          Add Variable
        </button>
        <button className="m-2 col btn btn-primary" onClick={cancel}>
          Cancel
        </button>
      </div>

      
    </div>
  )
}

export default Popup_Variable