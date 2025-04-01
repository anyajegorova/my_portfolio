import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
//   const { scene } = useGLTF("/path-to-your-model.glb");

  return <primitive object={scene} scale={1} />;
}
 function ThreeDView() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls /> {/* Allows rotation */}
    </Canvas>
  );
}

export default ThreeDView;