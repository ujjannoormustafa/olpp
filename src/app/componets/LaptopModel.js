"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function LaptopModel() {
    const { scene } = useGLTF('/scene.gltf');

    return (
        <div className="bg pb-8">
            <h1 className="text-6xl font-bold text-center herotxt text-gray-800 pt-20">Our Vision</h1>
            <div className="flex justify-center items-center  p-4">
                <div className="w-8/12 flex justify-evenly items-top ">
                    <div className="pl-12 ">
                        <h2 className="text-7xl font-bold text-blue-700 mb-4">What is OLPP?</h2>
                        <p className="text-lg text-gray-600">One laptop per Pakistani</p>
                        <p className="text-sm w-3/4 my-6 text-gray-900">Rehan Allahwala’s visionary initiative offers Chromebook laptops to every Pakistani at an affordable monthly installment of 1000 PKR. Starting with students and aspiring freelancers, this effort aims to democratize access to technology, fostering entrepreneurship and bridging the digital divide across Pakistan.</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
                <div className="w-[80%]"
                    style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                >
                    <div className="mt-10">
                        <Canvas style={{ height: '100vh', width: '100%', margin: 'auto' }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} />
                            <primitive object={scene} scale={[10, 10, 10]} />
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>
                </div>
            </div>

        </div>
    );
}