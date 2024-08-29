import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  console.log(Cyl);
  return (
    <>
    <Canvas flat camera={{ fov: 50 }}>
      <OrbitControls /> 
      <ambientLight /> {/* this is for light to the box*/}
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur
         intensity={10} 
         luminanceThreshold={0.35} 
         luminanceSmoothing={0} 
         />
         <ToneMapping adaptive/>
      </EffectComposer>
    </Canvas>
    <div className="w-full bg-zinc-900 py-3">
      <h1 className="text-zinc-400 relative p-16 mb-1 text-center">frontend is art and we coders were artist</h1>
    </div>
    </>
  );
};

export default App;
