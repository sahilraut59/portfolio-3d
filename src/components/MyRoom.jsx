/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/models/beta1.glb -k
*/

import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
  useTexture,
  Html,
  useVideoTexture,
} from "@react-three/drei";
import * as THREE from "three";

export function MyRoom(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/beta2.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("textures/baked.jpg");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");
  console.log(textureVSCode);
  textureVSCode.flipY=false

  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.5,
  });
  useEffect(() => {
    const triAction = actions.triangleAction;
    const sqrAction = actions.squareAction;
    sqrAction.play();
    triAction.play();
  }, []);

  // <mesh
  //       name="screen"
  //       geometry={nodes.screen.geometry}
  //       position={[-0.051, 0.849, -2.275]}
  //       scale={0.697}
  //     >
  //       <meshBasicMaterial map={textureVSCode} toneMapped={false} />
  //     </mesh>
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Table" position={[-0.037, 0.7, -2.117]}>
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube001_2"
            geometry={nodes.Cube001_2.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="wall" position={[-0.317, 1.679, -0.317]}>
          <mesh
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube005_1"
            geometry={nodes.Cube005_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube005_2"
            geometry={nodes.Cube005_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube005_3"
            geometry={nodes.Cube005_3.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="square"
          geometry={nodes.square.geometry}
          material={textureMaterial}
          position={[-1.811, 3.221, -2.366]}
          rotation={[1.571, 1.564, -1.571]}
        />
        <mesh
          name="window"
          geometry={nodes.window.geometry}
          material={textureMaterial}
          position={[1.696, 2.35, -2.606]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <group name="paiPusni" position={[-0.457, -0.014, 1.464]}>
          <mesh
            name="Plane009"
            geometry={nodes.Plane009.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane009_1"
            geometry={nodes.Plane009_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane009_2"
            geometry={nodes.Plane009_2.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="floorTiles"
          geometry={nodes.floorTiles.geometry}
          material={textureMaterial}
          position={[-0.317, 1.679, -0.377]}
        />
        <mesh
          name="triangle"
          geometry={nodes.triangle.geometry}
          material={textureMaterial}
          position={[-1.04, 3.303, -2.366]}
          rotation={[-Math.PI, 1.571, 0]}
        />
        <mesh
          name="tubelight"
          geometry={nodes.tubelight.geometry}
          material={textureMaterial}
          position={[0, 0.797, -2.501]}
          scale={[1.121, 0.011, 0.016]}
        />
        <group
          name="mouse"
          position={[0.059, 0.85, -1.918]}
          rotation={[0, 1.431, 0]}
          scale={[0.061, 0.015, 0.042]}
        >
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube004_1"
            geometry={nodes.Cube004_1.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="sofa"
          geometry={nodes.sofa.geometry}
          material={textureMaterial}
          position={[-2.001, 0.165, 1.48]}
        />
        <mesh
          name="cushion"
          geometry={nodes.cushion.geometry}
          material={textureMaterial}
          position={[-2.315, 0.881, 1.916]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="seat"
          position={[-0.258, 0.616, -1.267]}
          rotation={[0, -0.081, 0]}
          scale={0.957}
        >
          <mesh
            name="Cube009"
            geometry={nodes.Cube009.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube009_1"
            geometry={nodes.Cube009_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube009_2"
            geometry={nodes.Cube009_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube009_3"
            geometry={nodes.Cube009_3.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="keyboardBase"
          position={[-0.278, 0.862, -1.956]}
          scale={0.735}
        >
          <mesh
            name="Cube014"
            geometry={nodes.Cube014.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube014_1"
            geometry={nodes.Cube014_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube014_2"
            geometry={nodes.Cube014_2.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="topShelf"
          geometry={nodes.topShelf.geometry}
          material={textureMaterial}
          position={[-1.391, 3.056, -2.345]}
        />
        <mesh
          name="bottomShelf"
          geometry={nodes.bottomShelf.geometry}
          material={textureMaterial}
          position={[-1.391, 2.297, -2.345]}
        />
        <group name="lampLight" position={[-0.898, 2.752, -2.337]}>
          <mesh
            name="Cylinder008"
            geometry={nodes.Cylinder008.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cylinder008_1"
            geometry={nodes.Cylinder008_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cylinder008_2"
            geometry={nodes.Cylinder008_2.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="TV" position={[-0.051, 0.849, -2.275]} scale={0.697}>
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube002_1"
            geometry={nodes.Cube002_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube002_2"
            geometry={nodes.Cube002_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube002_3"
            geometry={nodes.Cube002_3.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="book" position={[-1.285, 2.367, -2.345]}>
          <mesh
            name="Cube050"
            geometry={nodes.Cube050.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube050_1"
            geometry={nodes.Cube050_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="book001"
          position={[-1.443, 2.41, -2.345]}
          rotation={[0, 0, 0.413]}
        >
          <mesh
            name="Cube056"
            geometry={nodes.Cube056.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube056_1"
            geometry={nodes.Cube056_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="book002"
          position={[-1.765, 2.549, -2.345]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="Cube062"
            geometry={nodes.Cube062.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube062_1"
            geometry={nodes.Cube062_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="book003"
          position={[-1.831, 2.549, -2.345]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="Cube081"
            geometry={nodes.Cube081.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube081_1"
            geometry={nodes.Cube081_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="book004"
          position={[-1.898, 2.549, -2.345]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="Cube082"
            geometry={nodes.Cube082.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube082_1"
            geometry={nodes.Cube082_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="book005"
          position={[-2.01, 2.549, -2.345]}
          rotation={[Math.PI / 2, -0.295, -Math.PI / 2]}
        >
          <mesh
            name="Cube083"
            geometry={nodes.Cube083.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube083_1"
            geometry={nodes.Cube083_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="leaf002"
          position={[0.902, 0.931, -2.19]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            name="Circle002"
            geometry={nodes.Circle002.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Circle002_1"
            geometry={nodes.Circle002_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="cabinet"
          position={[1.529, 0.433, -2.032]}
          rotation={[-Math.PI, 1.159, -Math.PI]}
        >
          <mesh
            name="mesh706968164"
            geometry={nodes.mesh706968164.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_1"
            geometry={nodes.mesh706968164_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_2"
            geometry={nodes.mesh706968164_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_3"
            geometry={nodes.mesh706968164_3.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_4"
            geometry={nodes.mesh706968164_4.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_5"
            geometry={nodes.mesh706968164_5.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_6"
            geometry={nodes.mesh706968164_6.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_7"
            geometry={nodes.mesh706968164_7.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_8"
            geometry={nodes.mesh706968164_8.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_9"
            geometry={nodes.mesh706968164_9.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_10"
            geometry={nodes.mesh706968164_10.geometry}
            material={textureGlassMaterial}
          />
          <mesh
            name="mesh706968164_11"
            geometry={nodes.mesh706968164_11.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_12"
            geometry={nodes.mesh706968164_12.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_13"
            geometry={nodes.mesh706968164_13.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_14"
            geometry={nodes.mesh706968164_14.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh706968164_15"
            geometry={nodes.mesh706968164_15.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="valoLogo002"
          position={[-2.565, 2.935, 0.112]}
          rotation={[-0.659, 0, -Math.PI / 2]}
        >
          <mesh
            name="Cube102"
            geometry={nodes.Cube102.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube102_1"
            geometry={nodes.Cube102_1.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="screen"
          geometry={nodes.screen.geometry}
          position={[-0.051, 0.849, -2.275]}
          scale={0.697}
        >
          <meshBasicMaterial map={textureVSCode} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("models/beta2.glb");
useTexture.preload("textures/baked.jpg");
