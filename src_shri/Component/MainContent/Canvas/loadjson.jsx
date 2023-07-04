// const nodes = useStoreState((store) => store.nodes);
// const edges = useStoreAction((store) => store.edges);
// const setElements = useStoreAction((actions) => actions.setElements); 

// const fileInputRef = useRef(null);

// const loadFile = async () => {

// const file = fileInputRef.current.files[0];
// const reader= new FileReader();

//   reader.onload = function (event) {
//       const jsonData = JSON.parse(event.target.result);

//       const updatedNodes = jsonData.Nodes;
//       const updatedEdges = jsonData.edges;

//       const elements = [...updatedNodes, ...updatedEdges];

//       setElements(elements);
//   };
//   reader.readAsText(file);
// };
// const handleImport = () => {
//     const input = document.createElement('input');
//     input.type ='file';
//     input.accept = 'application/json';
//     input.onchange = handleFileSelect;
//     input.click();
//   }
//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = handleFileLoad;
//     reader.readAsText(file);
//   }
//   const handleFileLoad = (event) => {
//     try{
//       const jsonData =  JSON.parse(event.target.result);
//       const updateData = {
//         nodes:jsonData.nodes,
//         edges:jsonData.edges
//       };
//       data.setNodes([updateData.nodes])
//       data.setEdges([updateData.edges])
//     } catch (error) {
//       console.error('Error parsing JSON File',error);
//     }
//   };