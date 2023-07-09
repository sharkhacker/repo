import React from "react";
import { colors } from "../../colors";
import EditStock from "./EditStock";
import EditFlow from "./EditFlow";
import EditSource from "./EditSource";
import EditConstant from "./EditConstant";
import EditVariable from "./EditVariable";

function PropertyBar({ data }) {
  const style = {
    textAlign: "center",
    color: colors.light1,
    minHeight: "50%",
    backgroundColor: colors.dark2,
    border: `solid 3px ${colors.light1}`,
  };

  return (
    <div id="propertyBar" className="propertyBar row" style={style}>
      <h4 className="row justify-content-center mt-2">Property Bar</h4>

      <div className="properties">
        {data.selectedObj.item === "stock" ? (
          <EditStock data={data} />
        ) : data.selectedObj.item === "source" ? (
          <EditSource data={data} />
        ) : data.selectedObj.item === "FlowNode" ? (
          <EditFlow data={data} />
        ) : data.selectedObj.item === "constant" ? (
          <EditConstant data={data}/>
        ): data.selectedObj.item === "variable" ? (
          <EditVariable data={data}/>
        ):(
          <div></div>
        )}
      </div>
    </div>
  );
}

export default PropertyBar;
