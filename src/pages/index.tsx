export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hi, I'm Rian Soe 👋</h1>
        <p className="text-lg mb-6">
          I'm a web developer currently learning React, Next.js, and the T3 Stack. I love building fast,
          modern web applications and exploring new technologies.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔧 Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>tRPC & Prisma</li>
            <li>GitHub & Vercel</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">📫 Contact</h2>
          <p>Email: <a href="mailto:your@email.com" className="text-blue-600 underline">your@email.com</a></p>
          <p>GitHub: <a href="https://github.com/rian-soe" className="text-blue-600 underline">github.com/rian-soe</a></p>
        </section>

        <footer className="text-sm text-gray-500 mt-10 border-t pt-4">
          &copy; {new Date().getFullYear()} Rian Soe. Built with Next.js and Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}
