import React,{useRef} from 'react'
import trash from '../../../../icons/trash.svg'
import { colors } from '../../../../colors'
function UnitsForm({data,showForm,setShowForm,formStyle}) {

    const unitRef = useRef()

    const addUnit = () => {
      const newUnit = unitRef.current.value
      data.setUnits([...data.units,newUnit])
    }
    const deleteUnit = (index) => {
      const newUnits = [...data.units]
      newUnits.splice(index,1)
      data.setUnits(newUnits)
    }
    const toggleForm = () => {
      setShowForm(!showForm)
      
    }

    const unitListStyle = {
      width: '100%',
      boxSizing: 'border-box',
      whiteSpace: 'wrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      justifyContent: 'space-between',
      
    }

    const unitElementStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }

    const deleteButtonStyle = {
      backgroundImage : `url(${trash})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  return (
    <div style={formStyle}>
        
        <input type="text" className='form-control' placeholder='Enter a unit' ref={unitRef} />
        <button className='btn btn-success m-2' onClick={addUnit}>Add to List</button>
        <button className='btn btn-danger m-2' onClick={toggleForm}>Cancel</button>

        {data.units.length > 0 && (
          <ul style={unitListStyle} className='list-group mt-3'>
            {data.units.map((unit,index) => (
              <>
              <li style={unitElementStyle} key={index} className='list-group-item'>
              <>{unit}</>
              <button className='btn btn-danger mr-4' onClick={()=>deleteUnit(index)} style={deleteButtonStyle}>   </button>
              </li>
              </>
            ))}
          </ul>
        )}
    
    </div>
  )
}

export default UnitsForm