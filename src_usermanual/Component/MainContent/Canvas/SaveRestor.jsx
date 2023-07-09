import React from 'react';
import 'reactflow/dist/style.css';

const SaveRestore = ({data}) => {

  //getting edges, nodes and units from JSON 
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    let reader = new FileReader()

    reader.onload = (e) => {
      const fileContents = e.target.result
      const parsedElements = JSON.parse(fileContents)
      console.log(parsedElements)
      data.setEdges(parsedElements.edges)
      data.setNodes(parsedElements.nodes)
      data.setUnits(parsedElements.units)
    }
    reader.readAsText(file)


  }

  //accepting json file as input 
  const handleRestore = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = '.json'
    fileInput.onchange = handleFileChange
    fileInput.click();
  }

  return (
        
        <button className="btn btn-light" onClick={handleRestore}>Load File</button>
        
  );
};

export default SaveRestore;
