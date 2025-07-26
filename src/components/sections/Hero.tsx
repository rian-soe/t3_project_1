import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600">Rian Soe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Web Developer & QA Engineer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 text-gray-700">
            Brief introduction about yourself and what you do. Highlight your expertise and what makes you unique.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}