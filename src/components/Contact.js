import React from 'react'

const Contact = () => {
  return (
    <div
      className="bg-[url('https://img.freepik.com/free-vector/digital-dark-wavy-background_23-2148388254.jpg')] bg-cover bg-center text-white py-12"
    >
      <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font text-left pl-5 sm:pl-10 md:pl-14 lg:pl-20 mb-10 tracking-wider">
        Connect with me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 lg:px-20">
        {/* GitHub Link */}
        <div className="flex items-center justify-start space-x-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
            alt="GitHub"
            className="w-12 h-12 bg-white rounded-lg"
          />
          <a 
            href="https://github.com/yazhini345" 
            className="text-2xl text-white hover:text-red-700"
            target="_blank" 
            rel="noopener noreferrer"
          >
            yazhini423
          </a>
        </div>

        {/* Gmail Link */}
        <div className="flex items-center justify-start space-x-4 mr-10">
          <img 
            src="https://i.pinimg.com/474x/32/5a/4b/325a4bd7b5041b4455e9a0b64c92190d.jpg" 
            alt="Gmail"
            className="w-12 h-12 bg-white rounded-lg"
          />
          <a 
            href="mailto:yazhini423@gmail.com?subject=Hello%20Yazhini&body=I%20would%20like%20to%20connect%20with%20you."
            className="text-2xl text-white hover:text-red-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            yazhini423@gmail.com
          </a>
        </div>

        {/* LinkedIn Link */}
        <div className="flex items-center justify-start space-x-4">
          <img 
            src="https://i.pinimg.com/1200x/39/a5/ae/39a5ae84afcd8cd690f37e65f7d94798.jpg" 
            alt="LinkedIn" 
            className="w-12 h-12 bg-white rounded-lg"
          />
          <a 
            href="https://www.linkedin.com/in/yazhini-v-844412263/"
            className="text-2xl text-white hover:text-blue-600"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Yazhini V
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
