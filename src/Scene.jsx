import { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";

function Box(props) {
    const mesh = useRef();

    return (
        <mesh {...props}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={"orange"} />
        </mesh>
    )
}

export const Scene = () => {
    return (
        <>
            <ambientLight />
            <pointLight position={[10,10,10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </>
    )
}