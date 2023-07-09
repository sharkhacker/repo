import React from "react";
import * as functions from "./MenuBar_functions";
import AddUnits from "./AddUnits/AddUnits";
import { Panel } from "reactflow";
import DownloadButton from "../Canvas/downloadButton";
import SaveRestore from "../Canvas/SaveRestor";

function MenuBar({ data, setVariant, active, setActive }) {
  

  return (
    <>
      <Panel position="top-left">
        <div
          class="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <div class="btn-group" role="group">
            <div
              class="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Export As
            </div>
            <ul class="dropdown-menu">
              <li>
                {/* to export stock and flow diagram as json files */}
                <button
                  className="dropdown-item"
                  onClick={() => functions.downloadFile(data)}
                >
                  Export as json
                </button>
              </li>
              <li>
                {/* to export stock and flow diagram as image png files */}
                <DownloadButton />
              </li>
            </ul>
          </div>

          
          {/* to restore/load the saved json files */}
          <SaveRestore className="btn btn-light " data={data} />



          {/* clears the nodes and edges data */}
          <button className="btn btn-light " onClick={() => functions.clear(data)}>{" "}Clear{" "}</button>


          {/* for adding units to be used in stock and flow */}
          <AddUnits className="btn btn-light " data={data} />

          
          {/* various variants of background in flow diagram */}
          <div class="btn-group" role="group">
            <div
              class="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Variants
            </div>
            <ul class="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setVariant("dots")}
                >
                  dots
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setVariant("lines")}
                >
                  lines
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setVariant("cross")}
                >
                  cross
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Panel>

      {/* Toggle button for dark/light mode */}
      <Panel position="top-right">
        <button
          className="btn btn-light"
          onClick={() => {
            setActive(!active);
          }}
        >
          Light/Dark
        </button>
      </Panel>
    </>
  );
}

export default MenuBar;
