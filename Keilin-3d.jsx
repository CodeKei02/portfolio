import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/keilin-3d.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["tripo_node_a51bc5b1-7778-4375-a52b-5b926046b4ec"].geometry
        }
        material={
          materials[
            "tripo_node_a51bc5b1-7778-4375-a52b-5b926046b4ec_material.001"
          ]
        }
      />
    </group>
  );
}

useGLTF.preload("/models/keilin-3d.glb");
