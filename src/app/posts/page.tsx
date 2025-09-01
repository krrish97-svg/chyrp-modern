import Navbar from "../components/Navbar";

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <section className="pt-32 px-8">
        <h1 className="text-4xl font-bold">All Posts</h1>
        <p className="mt-2 text-gray-400">Here we’ll list posts from the database (later with backend).</p>
      </section>
    </main>
  );
}
