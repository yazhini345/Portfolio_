import React from 'react';
import exampleImage from './img/exampleImage.png';  // Adjust the import if needed
import xt from './img/xt.png';  // Adjust the import if needed
import post from './img/post.png';  // Adjust the import if needed
import web from './img/web.png';  // Adjust the import if needed

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-black text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 animate-pulse tracking-wider">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-auto hover:scale-105 transition-transform duration-300 text-white">
          <img
            src={exampleImage}
            alt="Tracker"
            className="w-full h-auto object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-4">Category Tracker</h3>
          <p className="text-sm leading-relaxed">A dynamic and responsive platform for product browsing and secure checkout.</p>
          <p className="text-sm mt-2"><strong>Technologies:</strong> React, TailwindCSS</p>
          <a href="https://github.com/yazhini345/Form-Table-Filter" target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">
            GitHub Link
          </a>
        </div>

        {/* Card 2 */}
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg h-auto hover:scale-105 transition-transform duration-300 text-white">
          <img
            src={xt}
            alt="ChatGPT with Hugging Face"
            className="w-full h-[300px] object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-4">PostNext</h3>
          <p className="text-sm leading-relaxed">Built a chatbot leveraging LLMs and Hugging Face APIs.</p>
          <p className="text-sm mt-2"><strong>Technologies:</strong> React, TailwindCSS</p>
          <a href="https://github.com/yazhini345/Promptopia_next.js" target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">
            GitHub Link
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg h-auto hover:scale-105 transition-transform duration-300 text-white">
          <img
            src={post}
            alt="ChatGPT with Hugging Face"
            className="w-full h-auto object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-4">PostNext</h3>
          <p className="text-sm leading-relaxed">Built a chatbot leveraging LLMs and Hugging Face APIs.</p>
          <p className="text-sm mt-2"><strong>Technologies:</strong> React, TailwindCSS</p>
          <a href="https://github.com/yazhini345/post_next" target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">
            GitHub Link
          </a>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-lg h-auto hover:scale-105 transition-transform duration-300 text-white">
          <img
            src={web}
            alt="Dynamic Website"
            className="w-full h-auto object-cover rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2 mt-4">FunFeast Website</h3>
          <p className="text-sm leading-relaxed">Developed a dynamic website using Bootstrap and WordPress.</p>
          <p className="text-sm mt-2"><strong>Technologies:</strong> HTML, CSS, Bootstrap</p>
          <a href="https://github.com/yazhini345/FunFeast" target="_blank" rel="noopener noreferrer" className="text-white mt-2 block hover:underline transition-all duration-300 ease-in-out">
            GitHub Link
          </a>
        </div>

      </div>
    </div>
  );
};

export default Project;
