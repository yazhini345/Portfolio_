import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section py-12 bg-gradient-to-r from-black to-blue-600 text-white">
      <h2 className="skills-title text-4xl font-semibold text-center mb-8 animate-pulse">My Skills</h2>
      <div className="skills-container max-w-2xl mx-auto">
        <ul className="list-inside ">
          <div className="grid grid-cols-3 gap-6 ">
            {/* ReactJS Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-1 border-2 border-blue-500 p-4 rounded-md skill-item animate- hover:bg-blue-500 hover:text-white transition-all">
              <span className="text-blue-500">•</span> ReactJS
            </li>

            {/* NextJS Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-teal-500 p-4 rounded-md skill-item animate-pulse hover:bg-teal-500 hover:text-white transition-all">
              <span className="text-teal-500">•</span> NextJS
            </li>

            {/* JavaScript Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-yellow-500 p-4 rounded-md skill-item animate-bounce hover:bg-yellow-500 hover:text-white transition-all">
              <span className="text-yellow-500">•</span> JavaScript
            </li>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {/* TypeScript Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-purple-500 p-4 rounded-md skill-item animate-pulse hover:bg-purple-500 hover:text-white transition-all">
              <span className="text-purple-500">•</span> Typescript
            </li>

            {/* Python Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-orange-500 p-4 rounded-md skill-item animate-bounce hover:bg-orange-500 hover:text-white transition-all">
              <span className="text-orange-500">•</span> Python
            </li>

            {/* TailwindCSS Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-indigo-500 p-4 rounded-md skill-item animate-pulse hover:bg-indigo-500 hover:text-white transition-all">
              <span className="text-indigo-500">•</span> TailwindCSS
            </li>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {/* Bootstrap Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-pink-500 p-4 rounded-md skill-item animate-bounce hover:bg-pink-500 hover:text-white transition-all">
              <span className="text-pink-500">•</span> Bootstrap
            </li>

            {/* NodeJS Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-green-500 p-4 rounded-md skill-item animate-pulse hover:bg-green-500 hover:text-white transition-all">
              <span className="text-green-500">•</span> NodeJS
            </li>

            {/* Git Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-red-500 p-4 rounded-md skill-item animate hover:bg-red-500 hover:text-white transition-all">
              <span className="text-red-500">•</span> Git
            </li>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {/* Github Skill */}
            <li className="text-lg font-semibold flex items-center justify-center space-x-2 border-2 border-gray-500 p-4 rounded-md skill-item animate-pulse hover:bg-gray-500 hover:text-white transition-all">
              <span className="text-gray-500">•</span> Github
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
