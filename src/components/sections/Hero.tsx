import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center md:text-left">
            {/* Animated greeting */}
            <div className="mb-6">
              <span className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium animate-fade-in">
                👋 Hello, I'm
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
              <span className="text-gray-900 dark:text-white">Rian Soe</span>
            </h1>

            {/* Role chips */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-800 text-sm font-medium">Web Developer</span>
              <span className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border border-purple-200 dark:border-purple-800 text-sm font-medium">QA Engineer</span>
            </div>

            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I build and test reliable, user‑focused web experiences
            </h2>

            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 text-gray-700 dark:text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.35s' }}>
              With a dual focus on development and quality assurance, I take projects from concept to launch—ensuring performance, accessibility, and delightful UX along the way.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Link
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <span className="flex items-center space-x-2">
                  <span>Contact Me</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="#projects"
                className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="flex items-center space-x-2">
                  <span>View My Work</span>
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow backdrop */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl dark:opacity-20" aria-hidden="true"></div>

              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[3px]">
                <div className="h-full w-full rounded-full bg-white dark:bg-gray-900"></div>
              </div>

              {/* Portrait */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/my_second_image.jpg"
                  alt="Rian Soe portrait"
                  width={320}
                  height={320}
                  priority
                  className="rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>

              {/* Small badge */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                6+ months experience
              </div>
            </div>
          </div>

          {/* Floating elements for visual interest */}
          <div className="pointer-events-none absolute top-20 right-10 md:right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-bounce-gentle"></div>
          <div className="pointer-events-none absolute bottom-24 left-10 md:left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
}