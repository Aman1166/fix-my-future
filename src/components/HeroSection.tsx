import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef, useMemo, useState, useContext } from "react";
import * as THREE from "three";
import { ThemeContext } from "../contexts/ThemeContext";

// Background Image Component
function ImageBackground() {
  const { isDark } = useContext(ThemeContext);
  return (
    <img
      src={isDark ? "/astro/g.jpeg" : "/astro/light/bg 2.png"}
      alt="cosmic background"
      className="absolute top-0 left-0 w-full h-full object-cover "
    />
  );
}

// Rotating Earth Sphere
function Earth() {
  const texture = useLoader(TextureLoader, "/astro/ea.jpg");
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={earthRef} position={[0, -0.4, 0]}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={1} metalness={0} />
    </mesh>
  );
}

// Rounded Plane Geometry for Cards
function createRoundedPlane(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  const w = width;
  const h = height;
  const r = Math.min(radius, w / 2, h / 2);

  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);

  const geometry = new THREE.ShapeGeometry(shape);
  geometry.computeBoundingBox();

  const uvs = geometry.attributes.uv;
  const pos = geometry.attributes.position;
  const box = geometry.boundingBox!;
  const minX = box.min.x;
  const minY = box.min.y;
  const maxX = box.max.x;
  const maxY = box.max.y;

  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    const py = pos.getY(i);
    uvs.setXY(i, (px - minX) / (maxX - minX), (py - minY) / (maxY - minY));
  }

  return geometry;
}

// Orbiting Cards Component
function CardsOrbit() {
  const { isDark } = useContext(ThemeContext);
  const groupRef = useRef<THREE.Group>(null);
  const cardRefs = useRef<(THREE.Mesh | null)[]>([]);
  const [open, setOpen] = useState(false);

  const images = useMemo(
    () => isDark ? [
      "/astro/CARD 1.jpg.jpeg",
      "/astro/CARD 2.jpg.jpeg",
      "/astro/CARD 3.jpg.jpeg",
      "/astro/CARD 4.jpg.jpeg",
      "/astro/CARD 5.jpg.jpeg",
      "/astro/CARD 6.jpg.jpeg",
    ] : [
      "/astro/light/CARD1.jpeg",
      "/astro/light/CARD2.jpeg",
      "/astro/light/CARD3.jpeg",
      "/astro/light/CARD4.jpeg",
      "/astro/light/CARD5.jpeg",
      "/astro/light/CARD6.jpeg",
    ],
    [isDark]
  );

  const textures = useLoader(TextureLoader, images);

  const radius = open ? 5 : 3;
  const scale = open ? 1.6 : 0.8;

  const cardGeometry = useMemo(() => createRoundedPlane(1.3, 2.4, 0.12), []);

  useFrame(({ camera }) => {
    if (groupRef.current && !open) {
      groupRef.current.rotation.y += 0.003;
    }
    cardRefs.current.forEach((card) => {
      if (card) {
        card.lookAt(camera.position);
      }
    });
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.4, 0]}
      onClick={() => setOpen(!open)}
    >
      {textures.map((texture, index) => {
        const angle = (index / textures.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <mesh
            key={index}
            ref={(el: THREE.Mesh | null) => { cardRefs.current[index] = el; }}
            position={[x, 0, z]}
            scale={[scale, scale, scale]}
          >
            <primitive object={cardGeometry} attach="geometry" />
            <meshBasicMaterial
              map={texture}
              side={THREE.DoubleSide}
              transparent
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Starfield Background Particles
function StarField() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 800;
    const geo = new THREE.BufferGeometry();
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 40;
      array[i * 3 + 1] = (Math.random() - 0.5) * 40;
      array[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(array, 3));
    return geo;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
      pointsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial size={0.03} color="#edbc7d" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

// Main Hero Section Component
export default function HeroSection({ onShopNow }: { onShopNow?: () => void }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <section className="relative h-[70vh] md:h-[90vh] bg-dark-gradient overflow-hidden">
      {/* Background Image Layer */}
      <ImageBackground />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-bg-secondary/60 via-transparent to-bg-primary z-5"></div>
      <div className="absolute inset-0 bg-linear-to-r from-bg-secondary/80 via-transparent to-bg-primary/80 z-5"></div>

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-6">
        <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#edbc7d" />
          <pointLight position={[-5, 3, 2]} intensity={0.5} color="#f5d9a8" />

          {isDark && <StarField />}
          <Earth />
          <CardsOrbit />
        </Canvas>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
<span className="text-amber-600 font-extrabold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 animate-fadeIn drop-shadow-lg neon-glow">
            
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight animate-fadeIn leading-none drop-shadow-2xl">
          <span className="gradient-text-strong">
            
          </span>
        </h1>
        <p className="text-base md:text-xl mb-8 font-medium tracking-wide text-gray-200/80 max-w-xl mx-auto drop-shadow-md animate-slideInRight">
          
        </p>
        <p className="text-slate-400 text-[10px] tracking-widest uppercase font-bold animate-pulse mb-4">
          Click on cards to expand ✦
        </p>
        <div className="pointer-events-auto mt-116">
          <button onClick={onShopNow} className="group relative bg-amber-50 outline-4 outline-green-800 px-6 py-2 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-600-500/30 active:scale-95">
            <span className={`relative z-10 font-extrabold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 text-white`}>
              <span>Shop Now</span>
              <svg className="w-4 h-4 stroke-current fill-none group-hover:translate-x-1.5 transition-transform" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>


    </section>
  );
}
