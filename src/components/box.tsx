import * as React from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from "react"

const Box = (props: JSX.IntrinsicElements['mesh']) => {
    // Non null assertion operator, this can't be null or undefined
    const ref = useRef<THREE.Mesh>(null!)
    // Basically tick function
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    
    return (
        <mesh
            {...props}
            ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'red'} />
        </mesh>
    )
}

export default Box