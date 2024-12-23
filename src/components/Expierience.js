import React from 'react';

const Experience = () => {
  return (
    <div className="bg-black py-12">
      <h3 className="text-4xl font-bold text-center text-white mb-6 tracking-wider">Experience</h3>

      {/* SpiritMineTech Experience */}
      <div className="max-w-4xl mx-auto px-4 p-8 rounded-lg shadow-lg bg-blue-600 mt-3 text-white transition-all hover:translate-y-4 hover:translate-y-4  ">
        <div>
          <h2 className="text-2xl font-bold text-left text-white mb-5">SpiritMineTech</h2>
          <h3 className="text-xl font-normal text-left text-white mb-2">Oct 2024</h3>
          <h3 className="text-xl font-normal text-left text-white mb-2">Intern</h3>
        </div>
        <p className="text-md leading-relaxed text-white">
          At SpiritMineTech, I enhanced my skills in ReactJS, NextJS, NodeJS, TailwindCSS, Agile, and Scrum methodologies.
          I was part of a team that focused on building dynamic and scalable web applications, where I worked on both front-end and back-end development.
          I contributed to creating user-friendly, responsive interfaces using ReactJS and NextJS. I also gained experience in implementing NodeJS for the server-side,
          ensuring seamless integration between the front-end and back-end. Additionally, I worked closely with version control tools like Git and GitHub for collaborative
          development and participated in daily Agile standups to ensure smooth progress. This experience helped me refine my full-stack development skills
          and deepened my understanding of modern web development practices.
        </p>
      </div>

      {/* Dreamy Technologies Experience */}
      <div className="max-w-4xl mx-auto px-4 p-8 rounded-lg shadow-lg bg-gray-950 mt-3 text-white transition-all hover:translate-y-4 hover:translate-y-4">
        <div>
          <h2 className="text-2xl font-bold text-left text-white mb-5">Dreamy Technologies</h2>
          <h3 className="text-xl font-normal text-left text-white mb-2">July 2024 - Aug 2024</h3>
          <h3 className="text-xl font-normal text-left text-white mb-2">Intern</h3>
        </div>
        <p className="text-md leading-relaxed text-white">
          At Dreamy Technologies, I focused on learning Bootstrap and used it to create a dynamic website. This hands-on experience helped me strengthen
          my skills in HTML, CSS, and JavaScript. I built a responsive, user-friendly website using Bootstrap, which improved my front-end development capabilities
          and deepened my understanding of web design principles.
        </p>
      </div>

      {/* Jovee Infotech Experience */}
      <div className="max-w-4xl mx-auto px-4 p-8 rounded-lg shadow-lg bg-blue-600 mt-3 text-white transition-all hover:translate-y-4 hover:translate-y-4">
        <div>
          <h2 className="text-2xl font-bold text-left text-white mb-5">Jovee Infotech</h2>
          <h3 className="text-xl font-normal text-left text-white mb-2">Jan 2024 - Apr 2024</h3>
          <h3 className="text-xl font-normal text-left text-white mb-2">Intern</h3>
        </div>
        <p className="text-md leading-relaxed text-white">
          At Jovee Infotech, I had the opportunity to learn about Large Language Models (LLM) and worked on creating a chatbot using Django. This project
          gave me valuable hands-on experience in Python and deepened my understanding of artificial intelligence. I used Python to develop the backend
          logic for the chatbot, integrating it with Django to handle user interactions effectively. This experience enhanced my skills in Python programming
          and AI technologies.
        </p>
      </div>
    </div>
  );
};

export default Experience;
