import Image from 'next/image';

export default function About() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Node.js',
    'Bootstrap', 'PHP Laravel', 'MySQL', 'MongoDB', 'Docker', 
    'Selenium', 'Jira', 'Postman', 'Appium', 'Cypress'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-200 dark:to-blue-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Single Image Implementation */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-4 ring-indigo-500/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image
              src="/images/my_image.jpg"
              alt="Rian Soe - QA Engineer"
              width={256}
              height={384} // taller ratio
              quality={100}
              className="object-cover w-full h-full"
              priority
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>

        </div>
          
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a junior QA Enginner with 6+ months of experience testing 
              modern web applications. I specialize in testing web applications 
              and mobile applications. My focus is on creating performant, maintainable 
              solutions that deliver exceptional user experiences.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional: Add experience timeline */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Professional Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Junior QA Enginner at NBG</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Student at University of Technology</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2025</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}