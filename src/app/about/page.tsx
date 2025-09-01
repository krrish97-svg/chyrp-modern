import PageWrapper from "../components/PageWrapper";
import FloatingCubes from "../components/FloatingCubes";

export default function About() {
  return (
    <PageWrapper>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        
        {/* Background gradient layer (same as Landing page) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0"></div>
        
        {/* Floating 3D Cubes */}
        <FloatingCubes />

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-6xl font-light mb-6 text-white tracking-wider drop-shadow-md">
            About Chyrp ⚡
          </h1>
          <p className="max-w-2xl text-xl text-gray-300 leading-relaxed mx-auto">
            Chyrp is a <span className="text-white font-semibold">futuristic blogging platform</span> 
            that blends smooth animations, holographic 3D visuals, and immersive navigation —
            delivering an experience that feels alive and glowing with energy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
