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
      <h1 className="text-zinc-300 border-rose-500  p-16 m-3 text-center">frontend is art and we coders were artista. we make to best fill</h1>
    </div>
    </>
  );
};

export default App;
