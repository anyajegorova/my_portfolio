import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ModelMagnet() {
    const { scene } = useGLTF("/MindTheGapNoBackground.glb");
    return <primitive object={scene} />;
}

function ModelClock() {
    const { scene } = useGLTF("/Room.glb");
    return <primitive object={scene} />;
}

function ThreeDView() {
    const [activeModel, setActiveModel] = useState("magnet");

    return (
        <>
            <div>
                <button onClick={() => setActiveModel("magnet")}>Show Magnet</button>
                <button onClick={() => setActiveModel("clock")}>Show Clock</button>
            </div>
            
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={<div>Loading Model...</div>}>
                    {activeModel === "magnet" ? <ModelMagnet /> : <ModelClock />}
                </Suspense>
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default ThreeDView;