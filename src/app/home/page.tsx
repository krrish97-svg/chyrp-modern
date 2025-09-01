import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <section className="pt-32 px-8 text-center">
        <h1 className="text-5xl font-bold">Welcome to Chyrp</h1>
        <p className="mt-4 text-lg text-gray-400">
          Your futuristic blog feed will appear here.
        </p>
      </section>
    </main>
  );
}
