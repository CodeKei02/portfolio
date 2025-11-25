import React, { useEffect, useRef, Suspense } from "react";
import { Navbar } from "./Navbar";
import { Button } from "./Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../../../Keilin-3d.jsx";
import type Hero from "@/types/content.js";
import { GitHubIcon } from "../icons/tools/index.jsx";
import { LinkedInIcon } from "../icons/contact/index.jsx";

export default function Header({ data }: { data: Hero }) {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    const target = [0, -0.15, 0];
    if (controls.target) {
      controls.target.set(target[0], target[1], target[2]);
      controls.update();
    }
  }, []);

  return (
    <header className="w-full  relative pt-5 px-4 m-auto h-[100vh] max-h-[800px]">
      <div className="animated-header-bg absolute inset-0 z-0 pointer-events-none" />
      <div className="header-bubbles" style={{ zIndex: 5 }} aria-hidden>
        <div
          className="bubble large color-a"
          style={{ left: "6%", top: "20%", animationDelay: "0s" }}
        />
        <div
          className="bubble medium color-b"
          style={{ left: "72%", top: "10%", animationDelay: "2s" }}
        />
        <div
          className="bubble small color-c"
          style={{ left: "50%", top: "60%", animationDelay: "1s" }}
        />
        <div
          className="bubble large color-b"
          style={{ left: "20%", top: "65%", animationDelay: "3s" }}
        />
        <div
          className="bubble medium color-c"
          style={{ left: "82%", top: "50%", animationDelay: "4s" }}
        />
        <div
          className="bubble small color-a"
          style={{ left: "34%", top: "30%", animationDelay: "5s" }}
        />
      </div>

      <Navbar />
      <div className="relative z-20 mx-auto mt-20 px-4 py-4 flex flex-col items-center lg:flex-row lg:w-[90%]">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold lg:text-4xl">{data.hero.title}</h1>
          <p className="text-sm mt-1 text-[1rem] lg:text-[1.25rem]">
            <span className="font-bold italic">
              {data.hero.subtitle.experience}.{" "}
            </span>
            {data.hero.subtitle.description}
          </p>
          <div className="flex gap-5 mt-10 justify-center lg:justify-start lg:w-3/4">
            <Button
              href="https://www.linkedin.com/in/keilin-escobar-01045032a"
              text="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </Button>
            <Button href="https://github.com/CodeKei02" text="GitHub">
              <GitHubIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 500,
            opacity: 1,
            maxWidth: 600,
            transition: "bottom 1s ease",
          }}
        >
          <Canvas shadows camera={{ position: [0, 1.6, 3.2], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight
              intensity={1.2}
              position={[5, 10, 5]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
              <group position={[0, 0.1, 0]}>
                <Model
                  scale={[1.5, 1.5, 1.5]}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                />
              </group>
            </Suspense>
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={false}
              autoRotate
            />
          </Canvas>
        </div>
      </div>
    </header>
  );
}
