import React, { useState, useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

const flowKey = 'example-flow';


const SaveRestore = (data) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();


  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes);
        setEdges(flow.edges);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);


  return (
        <div>
        <button className="btn btn-light" onClick={onSave}>Save</button>
        <button className="btn btn-light" onClick={onRestore}>Restore</button>
        </div>
  );
};

export default SaveRestore;
