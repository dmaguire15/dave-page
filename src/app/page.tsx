'use client'; 
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Brain, BrainCircuit, Cpu, Sparkles, ChevronDown, ChevronUp } from "lucide-react";


export default function HomePage() {
  const [showAllExperience, setShowAllExperience] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-t from-purple-900 via-indigo-800 to-black text-white">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> 
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center py-8 px-4 space-y-4 md:py-10 md:space-y-6">
        {/* Profile Photo */}
        <img
          src="/davepic.png"
          alt="David Maguire"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
        />
        {/* Name and Titles */}
        <div>
          <h1 className="text-3xl md:text-6xl font-bold">David Maguire</h1>
          <p className="text-base md:text-2xl mt-2 leading-relaxed">
            Software Engineer | Backend Developer | Full Stack Developer
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 mt-4">
          <a href="/api/resume" download="David_Maguire_Resume.pdf">
            <Button variant="outline">Download Resume</Button>
          </a>
          <a href="https://github.com/dmaguire15" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
        </div>
      </section>


    <section className="max-w-6xl mx-auto py-8 px-4 md:py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center">About Me</h2>
      
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Main About Content */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base md:text-lg">
                I&apos;m a passionate software engineer with over three years of professional experience 
                building robust, scalable applications.
              </p>
              
              <p className="text-base md:text-lg">
                I thrive on solving complex challenges and writing clean, maintainable code. 
                Throughout my career, I&apos;ve specialized in developing enterprise applications, database-driven systems, 
                and cloud-based automation tools that make a real impact.
              </p>
              
              <p className="text-base md:text-lg">
                What sets me apart is my commitment to continuous learning and embracing 
                cutting-edge technologies. I&apos;m always eager to explore new frameworks, optimize existing systems, and 
                leverage AI LLMs to enhance development workflows.
              </p>
              
              <p className="text-base md:text-lg"> 
                Whether it&apos;s architecting full-stack solutions, modernizing legacy systems, or collaborating with 
                cross-functional teams, I bring both technical expertise and a 
                problem-solving mindset to every project.
              </p>
            </div>
          </div> 
        </div>

        {/* Side panels */}
        <div className="space-y-6 md:space-y-8">
          {/* Experience */}
          <div className="bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-green-300 mb-2 text-center">Experience</h3>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400">5+</div>
            </div>
          </div>

          {/* AI Section */}
          <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-purple-300 mb-2 text-center">AI / LLMs</h3>
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
          <div className="bg-gray-800/50 rounded-xl p-4 md:p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-4 text-center">Languages / Frameworks</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-4 md:justify-center">
                <span title="React" className="devicon-react-original text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="C#" className="devicon-csharp-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="JavaScript" className="devicon-javascript-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="SQL" className="devicon-azuresqldatabase-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="AngularJS" className="devicon-angularjs-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
                <span title="Node.js" className="devicon-nodejs-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Experience */}
    <section className="max-w-6xl mx-auto py-4 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center">Professional Experience</h2>
      
      <div className="relative">
        {/* Experience Cards */}
        <div className="space-y-8 md:space-y-12">
          
          {/* LAZ Parking */}
          <div className="relative">
            <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-1">App Developer</h3>
                  <h4 className="text-lg md:text-xl text-gray-300 mb-2">LAZ Parking</h4>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0">Current</span>
                  <span className="text-gray-400 text-sm">Aug 2023 – Present</span>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Utilized AI LLMs, primarily <span className="text-orange-300 font-medium">Claude Opus 4</span> and <span className="text-orange-300 font-medium">Claude Sonnet 4</span>, to assist in development and documentation of codebases.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Developed a full-stack application using <span className="text-blue-300 font-medium">React, 
                    JavaScript, and TypeScript</span> that supports OAuth authentication, collects user and API data via forms, stores it in structured SQL tables, 
                    and displays it on personalized user dashboards.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Maintained legacy code for enterprise web applications written in <span className="text-purple-300 font-medium">Angular and TypeScript</span>.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Developed a deployable application using <span className="text-purple-300 font-medium">Windows Forms and C#</span> that aggregates files of different types from various server locations and compiles them into structured PDF packages.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Developed a <span className="text-purple-300 font-medium">C# Azure Function</span> to securely decrypt, process, and manipulate files from an SFTP directory, seamlessly transmitting the extracted data via API integrations.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Created and maintained pipelines in <span className="text-blue-300 font-medium">Azure Data Factory</span>, 
                  utilizing SQL and PowerShell scripts.</p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 md:gap-2 mt-6">
                <span className="bg-blue-600/20 text-blue-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">React</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Azure</span>
                <span className="bg-purple-600/20 text-purple-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">TypeScript</span>
                <span className="bg-purple-600/20 text-purple-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">C#</span>
                <span className="bg-purple-600/20 text-purple-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Angular</span>
                <span className="bg-orange-600/20 text-orange-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Claude Opus</span>
                <span className="bg-orange-600/20 text-orange-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Claude Sonnet</span>
              </div>
            </div>
          </div>

          {/* Ivy Biomedical Systems */}
          <div className="relative">
            
            <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-1">Software Engineer / IT Manager</h3>
                  <h4 className="text-lg md:text-xl text-gray-300 mb-2">Ivy Biomedical Systems</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">June 2022 – Aug 2023</span>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Developed a web application written in <span className="text-purple-300 font-medium">C# and ASP.NET</span> that generates and prints various order labels based on user-provided shipping numbers.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Developed a <span className="text-blue-300 font-medium">database-driven</span> web application written in <span className="text-purple-300 font-medium">C# and ASP.NET</span> enabling employees to input information in a structured report format, as well as view, edit, and print previously created reports.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Maintained essential <span className="text-green-300 font-medium">IT infrastructure</span> including desktops, servers, email systems, security tools, and company databases.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Performed a company-wide email server transfer from <span className="text-green-300 font-medium">Intermedia to Microsoft 365</span>.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Implemented <span className="text-red-300 font-medium">security measures</span> to protect sensitive data and ensure compliance with industry standards.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <p className="text-sm md:text-base">Provided <span className="text-green-300 font-medium">technical support and training</span> to employees, enhancing their proficiency with software and hardware.</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 md:gap-2 mt-6">
                <span className="bg-purple-600/20 text-purple-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">C#</span>
                <span className="bg-purple-600/20 text-purple-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">ASP.NET</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Database Management</span>
                <span className="bg-green-600/20 text-green-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Microsoft 365</span>
                <span className="bg-green-600/20 text-green-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">IT Infrastructure</span>
                <span className="bg-red-600/20 text-red-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Security</span>
              </div>
            </div>
          </div>

          {/* Expandable Additional Experience */}
          <div className={`transition-all duration-500 ease-in-out ${
            showAllExperience 
              ? 'max-h-none opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="space-y-8 md:space-y-12">
              
              {/* CyberArk */}
              <div className="relative">

                <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-blue-200 mb-1">Enterprise Support Intern</h3>
                      <h4 className="text-lg md:text-xl text-gray-300 mb-2">CyberArk</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">July 2021 – Jan 2022</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Assisted in large-scale <span className="text-green-300 font-medium">support case close and account reconciliation</span> project.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Provided Tier 1 <span className="text-green-300 font-medium">enterprise support</span> for clients using CyberArk Privileged Access Manager, assisting with account onboarding, password rotation, and vault connectivity issues.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Gained hands-on experience with <span className="text-red-300 font-medium">enterprise identity security concepts</span> such as privileged access management, credential rotation, and session monitoring.
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mt-6">
                    <span className="bg-green-600/20 text-green-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Enterprise Support</span>
                    <span className="bg-red-600/20 text-red-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Cybersecurity</span>
                  </div>
                </div>
              </div>

              {/* Vineyard Vines */}
              <div className="relative">
                
                <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-pink-300 mb-1">IT Intern</h3>
                      <h4 className="text-lg md:text-xl text-gray-300 mb-2">Vineyard Vines</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">Jan 2020 – May 2020</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-pink-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Provided Tier 1 <span className="text-green-300 font-medium">IT support</span> to corporate and retail employees, resolving hardware, software, and network-related issues.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-pink-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Assisted in <span className="text-red-300 font-medium">diagnosing and troubleshooting</span> issues with desktop computers, laptops, printers, and mobile devices.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-pink-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Helped <span className="text-green-300 font-medium">set up and configure</span> user accounts, devices, and software for new hires and internal transfers.
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mt-6">
                    <span className="bg-green-600/20 text-green-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">IT Support</span>
                    <span className="bg-red-600/20 text-red-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Hardware Troubleshooting</span>
                  </div>
                </div>
              </div>

              {/* Sacred Heart University */}
              <div className="relative">
                
                <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-1">Audio Visual Technician</h3>
                      <h4 className="text-lg md:text-xl text-gray-300 mb-2">Sacred Heart University</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">Jan 2019 – May 2021</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        <span className="text-red-300 font-medium">Monitored and repaired</span> audio, video, control systems, and video conferencing equipment in classrooms and conference rooms across campus.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Conducted <span className="text-green-300 font-medium">routine maintenance, repairs, and inventory checks</span> on A/V equipment to ensure reliability.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Adhered to <span className="text-red-300 font-medium">safety protocols</span> while installing projectors, displays, and speakers.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 mt-1">▸</span>
                      <p className="text-sm md:text-base">
                        Implemented efficient <span className="text-red-300 font-medium">cable management</span> to maintain organized and hazard-free setups.
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mt-6">
                    <span className="bg-green-600/20 text-green-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">System Maintenance</span>
                    <span className="bg-red-600/20 text-red-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Equipment Repair</span>
                    <span className="bg-red-600/20 text-red-300 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">Cable Management</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Show More/Less Button */}
          <div className="flex justify-center mt-6 md:mt-8">
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-blue-500/50 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-sm md:text-base font-medium">
                {showAllExperience ? 'Show Less' : 'Show More'}
              </span>
              {showAllExperience ? (
                <ChevronUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* AI/LLMs */}
    <section className="max-w-4xl mx-auto py-6 px-4 md:py-8 md:px-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">AI & LLMs</h2>
      
      <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-purple-500/20">
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-8 justify-center">
          <div className="flex flex-col items-center group">
            <div className="bg-green-500/20 rounded-full p-3 md:p-4 mb-3 group-hover:bg-green-500/30 transition-colors">
              <Brain className="w-6 h-6 md:w-8 md:h-8 text-green-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-base md:text-lg font-semibold text-green-300">GPT-5</span>
            <span className="text-xs md:text-sm text-gray-400">OpenAI</span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="bg-blue-500/20 rounded-full p-3 md:p-4 mb-3 group-hover:bg-blue-500/30 transition-colors">
              <Cpu className="w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-base md:text-lg font-semibold text-blue-300">Claude Sonnet 4</span>
            <span className="text-xs md:text-sm text-gray-400">Anthropic</span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="bg-orange-500/20 rounded-full p-3 md:p-4 mb-3 group-hover:bg-orange-500/30 transition-colors">
              <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-orange-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-base md:text-lg font-semibold text-orange-300">Claude Opus 4</span>
            <span className="text-xs md:text-sm text-gray-400">Anthropic</span>
          </div>

          <div className="flex flex-col items-center group">
            <div className="bg-purple-500/20 rounded-full p-3 md:p-4 mb-3 group-hover:bg-purple-500/30 transition-colors">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-base md:text-lg font-semibold text-purple-300">Gemini 2.5</span>
            <span className="text-xs md:text-sm text-gray-400">Google</span>
          </div>
        </div>
      </div>
    </section>

    {/* Technical Skills */}
    <section className="max-w-6xl mx-auto py-6 px-4 md:py-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">Technical Skills</h2>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Languages */}
        <div className="bg-gray-800/50 rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-purple-300">Languages</h3>
          <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-4 md:justify-center">
            <div className="flex flex-col items-center group">
              <span title="C#" className="devicon-csharp-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">C#</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="JavaScript" className="devicon-javascript-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="TypeScript" className="devicon-typescript-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-800/50 rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-blue-300">Frameworks</h3>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-4 md:justify-center">
            <div className="flex flex-col items-center group">
              <span title="React" className="devicon-react-original text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">React</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Node.js" className="devicon-nodejs-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Angular" className="devicon-angularjs-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">Angular</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title=".NET" className="devicon-dotnetcore-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">.NET</span>
            </div>
          </div>
        </div>

        {/* Tools and Cloud */}
        <div className="bg-gray-800/50 rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-green-300">Tools & Cloud</h3>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-4 md:justify-center">
            <div className="flex flex-col items-center group">
              <span title="Azure" className="devicon-azure-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">Azure</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="SQL Server" className="devicon-azuresqldatabase-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">SQL Server</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Git" className="devicon-git-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">Git</span>
            </div>
            <div className="flex flex-col items-center group">
              <span title="Visual Studio" className="devicon-visualstudio-plain text-2xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"></span>
              <span className="text-xs md:text-sm">VS</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Contact */}
    <section className="text-center py-12 px-4 md:py-16 bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
      <p className="mb-6 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">Whether you&apos;re interested in collaborating on a project, have a question about my work, or just want to talk tech, feel free to reach out! 
        I&apos;m always open to new opportunities and conversations in the world of software engineering.</p>
      <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center items-center">
        <a href="mailto:drmaguire15@gmail.com">
          <Button>Email Me</Button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/drmaguire/">
          <Button variant="outline">LinkedIn</Button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dmaguire15">
          <Button variant="outline">GitHub</Button>
        </a>
      </div>
    </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} David Maguire · Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
