import { saveAs } from "file-saver"



 {/* to download stock and flow diagram as json */}
export const downloadFile = function(data){
    const downloadData = {
        nodes : data.nodes,
        edges : data.edges,
        units : data.units
    }
    const jsonData = JSON.stringify(downloadData)
    const blob = new Blob([jsonData], {type:"application/json"})
    saveAs(blob,'mydata.json')

}


export const clear = (data) => {
    // clear nodes and edges
    data.setNodes([])
    data.setEdges([])
}