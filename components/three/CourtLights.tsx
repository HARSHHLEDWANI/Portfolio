'use client';

export default function CourtLights() {
  return (
    <>
      <ambientLight intensity={0.3} color="#1a2040" />

      {([ [-8,12,4], [8,12,4], [-8,12,-4], [8,12,-4] ] as [number,number,number][]).map(([x,y,z], i) => (
        <spotLight
          key={i}
          position={[x, y, z]}
          angle={0.5}
          penumbra={0.4}
          intensity={80}
          color="#fff8e7"
          castShadow
          shadow-mapSize={[1024, 1024] as any}
        />
      ))}

      <pointLight position={[0, 0.5, 0]} intensity={8} color="#9B5A2A" />
      <pointLight position={[-11, 3, 0]} intensity={15} color="#00FF88" />
      <pointLight position={[11, 3, 0]} intensity={15} color="#00CFFF" />
      <pointLight position={[0, 3, 0]} intensity={10} color="#FFD700" />
      <pointLight position={[13, 3, 4]} intensity={12} color="#FFB347" />
    </>
  );
}
