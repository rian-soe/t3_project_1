import Image from 'next/image';

export default function About() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Node.js',
    'Bootstrap', 'PHP Laravel', 'MySQL', 'MongoDB', 'Docker', 
    'Selenium', 'Jira', 'Postman', 'Appium', 'Cypress'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Single Image Implementation */}
        <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
              <Image
                src="/images/my_cool_photo.png"
                alt="Rian Soe - QA Engineer"
                width={256}
                height={256}
                quality={100}
                className="object-cover w-full h-full"
                priority
                unoptimized={process.env.NODE_ENV === 'development'} // Optimized in production
              />
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a junior QA Enginner with 6+ months of experience testing 
              modern web applications. I specialize in testing web applications 
              and mobile applications. My focus is on creating performant, maintainable 
              solutions that deliver exceptional user experiences.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional: Add experience timeline */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <div>
                    <h4 className="font-medium">Junior QA Enginner at NBG</h4>
                    <p className="text-sm text-gray-500">2025 - Present</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                  <div>
                    <h4 className="font-medium">Student at University of Technology</h4>
                    <p className="text-sm text-gray-500">2020 - 2025</p>
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