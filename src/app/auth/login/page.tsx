import PageWrapper from "../../components/PageWrapper";
import FloatingCubes from "../../components/FloatingCubes";

export default function Login() {
  return (
    <PageWrapper>
      <div className="relative flex flex-col items-center justify-center min-h-screen 
        bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 overflow-hidden">
        
        <FloatingCubes />

        <h1 className="text-4xl font-bold mb-6 z-10">Login to Chyrp</h1>
        <form className="flex flex-col space-y-4 w-full max-w-sm z-10">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800 text-white border border-cyan-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-gray-800 text-white border border-cyan-500 focus:outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
          >
            Login
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
