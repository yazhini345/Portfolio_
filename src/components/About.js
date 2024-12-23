import React from 'react';
import '../index.css';

const About = () => {
  return (
    <div className="bg-black py-12 ">
      <div className="max-w-4xl mx-auto px-6 py-20 bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-black transition-all hover:translate-x-4 hover:translate-x-4">
        <h3 className="text-4xl font-bold text-left text-white mb-6">About Me</h3>
        <p className="text-xl leading-relaxed text-white">
          I am a Full Stack Developer and a Computer Science Engineering student. I'm passionate about software development, AI, and web technologies.
          I have interned at SpiritMine Tech, Jovee Infotech, and Dreamy Technologies, where I worked with ReactJS, NextJS, Django, and TailwindCSS.
          My projects include a Virus Spread Tracker and ChatGPT using Hugging Face. I’m skilled in JavaScript, Python, Git, and AWS.
          I aim to specialize in full-stack development and am passionate about collaborating on open-source projects and exploring new technologies.
          Let's connect!
        </p>
      </div>
    </div>
  );
};

export default About;
