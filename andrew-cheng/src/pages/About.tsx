import React from 'react';

const About = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-lg">
        <p className="text-lg leading-relaxed">
          I'm a software developer passionate about building impactful solutions. 
          I focus on creating clean, efficient, and user-friendly applications 
          that solve real-world problems.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="space-y-1">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <ul className="space-y-1">
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;