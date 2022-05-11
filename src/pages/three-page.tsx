import { Canvas } from "@react-three/fiber";
import * as React from "react";
import Box from "../components/box";

const ThreePage = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]}/>
            <Box position={[2, 0, 0]} />
            <Box position={[-2, 0, 0]} />
        </Canvas>
    )
}


export default ThreePage