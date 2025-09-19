'use client'; 
import React from "react";
import { Button } from "../components/ui/button";
import { Brain, BrainCircuit, Cpu, Sparkles } from "lucide-react";


export default function HomePage() {

  return (
    <main className="min-h-screen bg-gradient-to-t from-purple-900 via-indigo-800 to-black text-white">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> 
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center py-10 px-4 space-y-6">
        {/* Profile Photo */}
        <img
          src="/davepic.png"
          alt="David Maguire"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
        />
        {/* Name and Titles */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">David Maguire</h1>
          <p className="text-lg md:text-2xl mt-2">
            Software Engineer | Backend Specialist | Full Stack Developer
          </p>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          {/*<Button variant="outline">View My Work</Button>*/}
          <a href="/api/resume" download="David_Maguire_Resume.pdf">
            <Button variant="outline">Download Resume</Button>
          </a>
        </div>
      </section>


    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-12 text-center">About Me</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main About Content */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I&apos;m a passionate software engineer with over three years of professional experience 
                building robust, scalable applications.
              </p>
              
              <p className="text-lg">
                I thrive on solving complex challenges and writing clean, maintainable code. 
                Throughout my career, I&apos;ve specialized in developing enterprise applications, database-driven systems, 
                and cloud-based automation tools that make a real impact.
              </p>
              
              <p className="text-lg">
                What sets me apart is my commitment to continuous learning and embracing 
                cutting-edge technologies. I&apos;m always eager to explore new frameworks, optimize existing systems, and 
                leverage AI tools to enhance development workflows.
              </p>
              
              <p className="text-lg"> 
                Whether it&apos;s architecting full-stack solutions, modernizing legacy systems, or collaborating with 
                cross-functional teams, I bring both technical expertise and a 
                problem-solving mindset to every project.
              </p>
            </div>
          </div> 
        </div>

        {/* Side panels */}
        <div className="space-y-8">
          {/* Experience */}
          <div className="bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-green-300 mb-2 text-center">Experience</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">3+</div>
            </div>
          </div>

          {/* AI Section */}
          <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-purple-300 mb-2 text-center">AI / LLMs</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Claude Opus 4</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Claude Sonnet 4</span>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Gemini 2.5</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">Languages / Frameworks</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-4 justify-center">
                <span title="React" className="devicon-react-original text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="C#" className="devicon-csharp-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="JavaScript" className="devicon-javascript-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="SQL" className="devicon-azuresqldatabase-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="AngularJS" className="devicon-angularjs-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="Node.js" className="devicon-nodejs-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Experience */}
    <section className="max-w-6xl mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-12 text-center">Professional Experience</h2>
      
      <div className="relative">
        {/* Experience Cards */}
        <div className="space-y-12">
          
          {/* LAZ Parking */}
          <div className="relative md:ml-18">
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-1">App Developer</h3>
                  <h4 className="text-xl text-gray-300 mb-2">LAZ Parking</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">Current</span>
                  <span className="text-gray-400 text-sm">Aug 2023 – Present</span>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p>Utilized AI LLMs, primarily <span className="text-orange-300 font-medium">Claude Opus 3</span> and <span className="text-orange-300 font-medium">Claude Sonnet 3.5</span>, to assist in development and documentation of codebases.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p>Developed a full-stack application using <span className="text-blue-300 font-medium">React, JavaScript, and TypeScript</span> that supports OAuth authentication, collects user and API data via forms, stores it in structured SQL tables, and displays it on personalized user dashboards.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p>Maintained legacy code for enterprise web applications written in <span className="text-purple-300 font-medium">Angular and TypeScript</span>.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p>Developed a deployable application using <span className="text-purple-300 font-medium">Windows Forms and C#</span> that aggregates files of different types from various server locations and compiles them into structured PDF packages.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p>Developed a <span className="text-purple-300 font-medium">C# Azure Function</span> to securely decrypt, process, and manipulate files from an SFTP directory, seamlessly transmitting the extracted data via API integrations.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p>Created and maintained pipelines in <span className="text-blue-300 font-medium">Azure Data Factory</span>, utilizing SQL and PowerShell scripts.</p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm">React</span>
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm">Azure</span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm">TypeScript</span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm">C#</span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm">Angular</span>
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-lg text-sm">Claude Opus</span>
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-lg text-sm">Claude Sonnet</span>
              </div>
            </div>
          </div>

          {/* Ivy Biomedical Systems */}
          <div className="relative md:ml-18">
            
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-1">Software Engineer / IT Manager</h3>
                  <h4 className="text-xl text-gray-300 mb-2">Ivy Biomedical Systems</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">June 2022 – Aug 2023</span>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p>Developed a <span className="text-purple-300 font-medium">web application</span> that generates and prints various order labels based on user-provided shipping numbers.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p>Developed a database-driven <span className="text-purple-300 font-medium">web application</span> enabling employees to input information in a structured report format, as well as view, edit, and print previously created reports.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p>Maintained essential IT infrastructure including desktops, servers, email systems, security tools, and company databases.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p>Performed a company-wide email server transfer from <span className="text-orange-300 font-medium">Intermedia to Microsoft 365</span>.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p>Implemented security measures to protect sensitive data and ensure compliance with industry standards.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p>Provided technical support and training to employees, enhancing their proficiency with software and hardware.</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm">Web Development</span>
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm">Database Management</span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-lg text-sm">Microsoft 365</span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-lg text-sm">IT Infrastructure</span>
                <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-lg text-sm">Security</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* AI/LLMs */}
    <section className="max-w-4xl mx-auto py-8 px-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">AI & LLMs</h2>
      
      <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-8 backdrop-blur-sm border border-purple-500/20">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center group">
            <div className="bg-green-500/20 rounded-full p-4 mb-3 group-hover:bg-green-500/30 transition-colors">
              <Brain className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-semibold text-green-300">GPT-5</span>
            <span className="text-sm text-gray-400">OpenAI</span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="bg-blue-500/20 rounded-full p-4 mb-3 group-hover:bg-blue-500/30 transition-colors">
              <Cpu className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-semibold text-blue-300">Claude Sonnet 4</span>
            <span className="text-sm text-gray-400">Anthropic</span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="bg-orange-500/20 rounded-full p-4 mb-3 group-hover:bg-orange-500/30 transition-colors">
              <BrainCircuit className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-semibold text-orange-300">Claude Opus 4</span>
            <span className="text-sm text-gray-400">Anthropic</span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="bg-purple-500/20 rounded-full p-4 mb-3 group-hover:bg-purple-500/30 transition-colors">
              <Sparkles className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-semibold text-purple-300">Gemini 2.5</span>
            <span className="text-sm text-gray-400">Google</span>
          </div>
        </div>
      </div>
    </section>

    {/* Technical Skills */}
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">Technical Skills</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Languages */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-center text-purple-300">Languages</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col items-center group">
              <span title="C#" className="devicon-csharp-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">C#</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="JavaScript" className="devicon-javascript-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="TypeScript" className="devicon-typescript-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-center text-blue-300">Frameworks</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col items-center group">
              <span title="React" className="devicon-react-original text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">React</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Node.js" className="devicon-nodejs-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Angular" className="devicon-angularjs-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">Angular</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title=".NET" className="devicon-dotnetcore-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">.NET</span>
            </div>
          </div>
        </div>

        {/* Tools and Cloud */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-center text-green-300">Tools & Cloud</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col items-center group">
              <span title="Azure" className="devicon-azure-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">Azure</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="SQL Server" className="devicon-azuresqldatabase-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">SQL Server</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Git" className="devicon-git-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">Git</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Visual Studio" className="devicon-visualstudio-plain text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-sm">VS</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Contact */}
    <section className="text-center py-16 px-4 bg-gray-900 ">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="mb-6 max-w-4xl mx-auto">Whether you&apos;re interested in collaborating on a project, have a question about my work, or just want to talk tech, feel free to reach out! 
        I&apos;m always open to new opportunities and conversations in the world of software engineering.</p>
      <div className="space-x-4">
        <a href="mailto:drmaguire15@gmail.com">
          <Button>Email Me</Button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/drmaguire/">
          <Button variant="outline">LinkedIn</Button>
        </a>
        {/*
        <Button variant="outline">GitHub</Button>
        */}
      </div>
    </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} David Maguire · Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
