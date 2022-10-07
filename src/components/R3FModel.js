import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
    const { nodes, materials } = useGLTF("/sword.glb");
    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.y += 0.03
    })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        geometry={nodes.mesh_0.geometry}
        material-color="#6d6fa3"
      />
    </group>
  );
}

// materials guide: https://onion2k.github.io/r3f-by-example/ 

// useGLTF.preload("sword.glb");