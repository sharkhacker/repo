import React, { useRef, useState } from "react"

function EditStock({data}) {

  const valueRef = useRef();
  const [obj,setObj] = useState(data.selectedObj)

  const makeNode = () => {
    const newNode = {
      id: obj.id,
      position: obj.position,
      item: 'stock',
      data: {
        name: obj.data.name,
        label: `${obj.data.name}`,
        value: valueRef.current.value,
        unit: "",
      },
      sourcePosition:'right',
      targetPosition:'left'
    };

    //deleting previous obj with same id
    const nodes = data.nodes.filter(obj => obj.id !== newNode.id)


    //adding new obj
    data.setNodes([...nodes, newNode]);
    console.log(nodes);
  };

  const cancel = () => {
    console.log(data)
    data.setSelectedObj([])
  };

  const [selectedUnit, setSelectedUnit] = useState('')
  const selectUnit = (event) => {
    setSelectedUnit(event.target.value)
  }

  return (
    <div className="boder-primary m-3">
      <h4>Edit {`${obj.data.name}`} details</h4>
      {/* taking input for label name and value */}
      <div className=" row form-group">
        <span>Edit Value</span>
        <input
          ref={valueRef}
          type="text"
          className="m-2 form-control"
          id="value"
          placeholder={obj.data.value}
        />
      </div>

      {/* Dropdown for Unit */}
      <div className="dropdown">
        <span>Select a Unit : </span>
        <select value={selectedUnit} onChange={selectUnit}>
          {data.units.map((unit,index) => (
            <option key={index} value={unit}>{unit}</option>
          ))}
          <p>Selected Unit : {selectedUnit}</p>
        </select>
        
      </div>

      <div className=" row form-group">
        <button className="m-2 col btn btn-primary" onClick={makeNode}>
          Save Stock
        </button>
        <button className="m-2 col btn btn-primary" onClick={cancel}>
          Cancel
        </button>
      </div>

      
    </div>
  )
}

export default EditStock