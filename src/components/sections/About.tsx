export default function About() {
    const skills = [
      'Next.js', 'React', 'TypeScript', 'Node.js',
      'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'Docker'
    ];
  
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Your Photo</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">
                I'm a passionate developer with 5+ years of experience building web applications.
                Specializing in modern JavaScript frameworks and cloud technologies, I create
                performant, scalable solutions with great user experiences.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }