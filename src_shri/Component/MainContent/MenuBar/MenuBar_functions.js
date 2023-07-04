import React from "react"
import { saveAs } from "file-saver"

export const downloadFile = function(data){
    const downloadData = {
        nodes : data.nodes,
        edges : data.edges
    }
    const jsonData = JSON.stringify(downloadData)
    const blob = new Blob([jsonData], {type:"application/json"})
    saveAs(blob,'mydata.json')


    
}


export const zoomIn = function(){
    
}

export const zoomOut = function(){
    
}

export const addUnits = function(){
    
}

export const loadFile = function(){
    
}

export const clear = (data) => {
    // clear nodes and edges
    data.setNodes([])
    data.setEdges([])
}