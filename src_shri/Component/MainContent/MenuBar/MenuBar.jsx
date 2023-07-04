import React from "react";
import * as functions from './MenuBar_functions'
import { colors } from "../../../colors";
import AddUnits from "./AddUnits/AddUnits";


function MenuBar({data}) {

  const style = {
    height: '10vh',
    backgroundColor : colors.dark2,
    color: colors.black,
    borderBottom: `solid 2px ${colors.light1}`,
    borderTop: `solid 2px ${colors.light1}`,
    borderRight: `solid 2px ${colors.light1}`,
    
  }

  return (
    
    <div className="navbar navbar-expand-lg" style={style}>

      <div
        className="navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <div className="btn-group">
          <button className="btn btn-light " onClick={() => functions.downloadFile(data)}> Download </button>
          
          
          <button className="btn btn-light " onClick={functions.loadFile}> Load File </button>
          <button className="btn btn-light " onClick={() => functions.clear(data)}> Clear </button>
          <AddUnits data={data}/>

        </div>
      </div>
    </div>
    
  );
}

export default MenuBar;
