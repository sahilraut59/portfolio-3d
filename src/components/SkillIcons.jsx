import { Float, useTexture, Decal } from "@react-three/drei";
import { html, css, javascript, react, node, tailwind, git } from "../assets";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
export const SkillIcons = () => {
  const [htmlTex] = useTexture([html]);
  const [cssTex] = useTexture([css]);
  const [jsTex] = useTexture([javascript]);
  const [reactTex] = useTexture([react]);
  const [nodeTex] = useTexture([node]);
  const [tailwindTex] = useTexture([tailwind]);
  const [gitTex] = useTexture([git]);

  const { viewport } = useThree();
  const techRef = useRef();
  // useFrame((state, delta) => (techRef.current.position.y += 0.1))
  const boxPosition = -viewport.height + 1.35;
  return (
    <>
      <Float frustumCulled>
        <mesh
          castShadow
          receiveShadow
          scale={0.15}
          position={[1.6, -viewport.height + 1, 6]}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={htmlTex}
          />
        </mesh>

        {/* Break */}

        <mesh
          castShadow
          receiveShadow
          scale={0.15}
          position={[1.6, -viewport.height + 2, 6]}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={cssTex}
          />
        </mesh>

        {/* Break */}

        <mesh
          castShadow
          receiveShadow
          scale={0.15}
          position={[1.1, -viewport.height + 3, 6]}
          frustumCulled
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={jsTex}
            
          />
        </mesh>

        {/* Break */}

        <mesh
          castShadow
          receiveShadow
          scale={0.15}
          position={[0.1, -viewport.height + 1, 6]}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={reactTex}
          />
        </mesh>

        {/* Break */}

        <mesh
          castShadow
          receiveShadow
          scale={0.15}
          position={[-0.4, -viewport.height + 2, 6]}
          frustumCulled
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={nodeTex}
            frustumCulled
          />
        </mesh>

        {/* Break */}
        <mesh
          castShadow
          receiveShadow
          scale={0.15}
          position={[0.1, -viewport.height + 3, 6]}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={gitTex}
          />
        </mesh>

        {/* Break */}
        </Float>
    </>
  );
};
