import React from 'react';
import exampleImage from './img/exampleImage.png';  // Adjust the import if needed
import next from './img/next.png';  // Adjust the import if needed
import post from './img/post.png';  // Adjust the import if needed
import web from './img/web.png';  // Adjust the import if needed

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-black text-white tene-white py-12 px-6">
      
      <h2 className="text-4xl font-bold text-center mb-8 animate-pulse tracking-wider">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-[800px] hover:scale-105 transition-transform duration-300 text-white ">
          <img
            src={exampleImage}
            alt="Tracker"
            className="w-full h-[500px] object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-11">Category Tracker</h3>
          <p className="text-sm leading-relaxed">A dynamic and responsive platform for product browsing and secure checkout.</p>
          <p className="text-sm mt-2 "><strong>Technologies:</strong> React, TailwindCSS</p>
          <a href="https://github.com/yazhini345/Form-Table-Filter" target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">
          GitHub Link</a>
          <div className="tech-list text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <ul className="space-y-2">
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">React</li>
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">Tailwind CSS</li>
            </ul>
          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg h-[800px] hover:scale-105 transition-transform duration-300 text-white ">
          <img
            src={next}
            alt="Virus Spread Tracker"
            className="w-full h-[500px] object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-11">Promptopia</h3>
          <p className="text-sm leading-relaxed">Analyzed virus spread across countries with dynamic filtering features.</p>
          <p className="text-sm mt-2"><strong>Technologies:</strong> React, Node.js, TailwindCSS</p>
          <a href="https://github.com/yazhini345/Promptopia_next.js" target="_blank" rel="noopener noreferrer" className="text-white  mt-2 block hover:underline transition-all duration-300 ease-in-out">GitHub Link</a>

          <div className="tech-list text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <ul className="space-y-2">
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">React</li>
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">Node.js</li>
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">TailwindCSS</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg h-[800px] hover:scale-105 transition-transform duration-300 text-white ">
          <img
            src={post}
            alt="ChatGPT with Hugging Face"
            className="w-full h-[500px] object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-11">PostNext</h3>
          <p className="text-sm leading-relaxed">Built a chatbot leveraging LLMs and Hugging Face APIs.</p>
          <p className="text-sm mt-2"><strong>Technologies: React, TailwindCSS</strong></p>
          <a href="https://github.com/yazhini345/post_next  " target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">GitHub Link</a>

          <div className="tech-list text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <ul className="space-y-2">
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">React</li>
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">TailwindCSS</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-[800px] hover:scale-105 transition-transform duration-300 text-white ">
          <img
            src={web}
            alt="Dynamic Website"
            className="w-full h-[500px] object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-11">FunFeast Website</h3>
          <p className="text-sm leading-relaxed">Developed a dynamic website using Bootstrap and WordPress.</p>
          <p className="text-sm mt-2"><strong>Technologies:</strong> HTML, CSS, Bootstrap</p>
          <a href="https://github.com/yazhini345/FunFeast" target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">GitHub Link</a>

          <div className="tech-list text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <ul className="space-y-2">
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">HTML</li>
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">CSS</li>
              <li className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">Bootstrap</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;
