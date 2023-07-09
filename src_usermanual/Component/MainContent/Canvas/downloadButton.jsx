import React from 'react';
import { useReactFlow, getRectOfNodes, getTransformForBounds, } from 'reactflow';


import { toPng } from 'html-to-image';

// import { html2canvas} from 'html2canvas'


function downloadImage(dataUrl) {
  const a = document.createElement('a');

  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton() {
  const { getNodes } = useReactFlow();
   const onClickImage = () => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2);

    toPng(document.querySelector('.react-flow__viewport'), {
      backgroundColor: 'white',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);
  };

  

  return (
    
      
      <button className="dropdown-item"  onClick={onClickImage}>Export as PNG</button>
    
  );
}

export default DownloadButton;
