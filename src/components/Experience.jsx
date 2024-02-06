import React, { useEffect, useRef, useState } from "react";
import { MyRoom } from "./MyRoom";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";
import * as THREE from "three";
import { RoundedBox, Sparkles, useScroll } from "@react-three/drei";
import { Projects, currentProjectAtom } from "./Projects";
import { useAtom } from "jotai";
import { SkillIcons } from "./SkillIcons";
import { Background } from "./Background";

const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);
  const characterContainerAboutRef = useRef();
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      if (section === 0) {
        setCharacterAnimation("Typing");
      } else if (section === 1 || section === 2) {
        setCharacterAnimation("Sitting");
      } else if (section === 3) {
        setCharacterAnimation("Music");
      }
      // setCharacterAnimation(section === 0 ? "Typing" : "Sitting");
    }, 600);
  }, [section, currentProject]);
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection > 3) {
      curSection = 3;
    }
    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);
    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");
    // console.log(euler.x, euler.y, euler.z);
  });
  const boxPosition = -viewport.height + 1.35;
  return (
    <>
      <Background />
      <motion.group
        position={[2.1453056485108433, 0.0828, 2.025041170099988]}
        rotation={[-3.141592653589793, 0.9723981633974486, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.95,
            scaleY: 0.95,
            scaleZ: 0.95,
          },
          1: {
            y: -viewport.height + 1.4,
            x: 0,
            z: 6,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            y: -viewport.height * 1.94 + 1,
            x: 0,
            z: -0.9,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1.5,
            x: 0.5,
            z: 6.5,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        transition={{
          duration:0.8,
        }}
      >
        <MyRoom />
        <group
          ref={characterContainerAboutRef}
          name="characterContainer"
          position={[-0.259, 0.092, -1.273]}
          rotation={[-Math.PI, 0.187, -Math.PI]}
        ></group>
      </motion.group>

      {/* <mesh position={[0, boxPosition, 6.7]} rotation={[0, 0, 0]} scale={0.9}>
        <boxGeometry />
        <meshStandardMaterial color={""} />
        
      </mesh> */}
      {/* <RoundedBox
        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        position={[0, boxPosition, 6.7]}
      >
        <meshPhongMaterial color="#6EA0F3" wireframe />
      </RoundedBox> */}
      {/* <group >
        <SkillIcons />
      </group> */}
      <Sparkles
        position={[0, boxPosition, 6.7]}
        count={70}
        noise={5}
        color={"white"}
        scale={8}
        size={5}
        speed={0.5}
        opacity={1}
      />

      {/* Skill */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      ></motion.group>
      <Projects />
    </>
  );
};

export default Experience;
