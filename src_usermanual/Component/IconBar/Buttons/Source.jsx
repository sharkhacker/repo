import React from "react";
import { button_data } from "../Button_Data";

function Source({ data, button_style }) {
  
  const popSource = () => {
    data.setDisplayKey(2)
  }

  return (
    <button
      onDragEnd={popSource}
      onClick={popSource}
      style={button_style}
      className="btn btn-light m-1"
    >
      <img src={button_data[1].imgPath} alt={button_data[1].name} />
      <span className="">{button_data[1].name}</span>
    </button>
  );
}

export default Source;
