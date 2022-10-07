import React from "react";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'
import { Model } from "../components/R3FModel";
import "../styles/Home.css"
import { PerspectiveCamera } from "@react-three/drei";
import { Button } from 'flowbite-react/lib/cjs/components/Button';


export default function Home() {
    return (
        <div id="home-container">
            <h1>RunesVR</h1>
            <div className="flex flex-wrap items-center gap-2">
            <Button
            id="download-button"
                outline={true}
                gradientDuoTone="purpleToBlue"
            >
                download now
            </Button>
            </div>
            <Canvas id="canvas">
                <Suspense fallback={null}>
                <PerspectiveCamera
                    makeDefault
                    zoom={15}
                    top={200}
                    bottom={-200}
                    left={200}
                    right={-200}
                    near={1}
                    far={2000}
                    position={[0, 0, 200]}
                />
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}