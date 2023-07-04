import React,{useState,useRef} from 'react'
import UnitsForm from './UnitsForm'
import { colors } from '../../../../colors';

function AddUnits({data}) {

const [showForm, setShowForm] = useState(false);
const toggleForm = () => {
  setShowForm(!showForm)
}

//creating overlay form according to buttons coordinates
const buttonRef = useRef()
const buttonCoords = buttonRef.current ? buttonRef.current.getBoundingClientRect() : {};
const formStyle = {
  position : 'absolute',
  top: buttonCoords.bottom + 'px',
  zIndex: 9999,
  width: '300px',
  padding: '10px',
  backgroundColor: colors.black,
  border: '2px grey solid'
  

}

  return (

    <>
    <button ref={buttonRef} className="btn btn-light " onClick={toggleForm}>Add Units </button>
    {showForm &&(
        <UnitsForm data={data} showForm={showForm} setShowForm={setShowForm} formStyle={formStyle} />
        
    )}
   </>
    
  )
}

export default AddUnits