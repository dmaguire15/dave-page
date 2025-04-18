'use client'; 
import React from "react";
import { Button } from "../components/ui/button";
import { saveAs } from "file-saver";


export default function HomePage() {

  return (
    <main className="min-h-screen bg-gradient-to-t from-purple-900 via-indigo-800 to-black text-white">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> 
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-6">
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

      {/* About Me */}
      <section className="max-w-4xl mx-auto py-6 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p>
        I'm a passionate software engineer with over three years of professional experience. 
        I thrive on solving complex challenges and writing clean, maintainable code. 
        Throughout my career, I've worked on maintaining and building enterprise applications, 
        database-driven systems, and cloud-based automation tools. I'm always eager to learn new 
        technologies and improve my craft, constantly seeking out opportunities to grow as 
        both a developer and a problem-solver.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {/* Icons */}
          <span title="C#" className="devicon-csharp-plain text-5xl"></span>
          <span title="SQL" className="devicon-azuresqldatabase-plain text-5xl"></span>
          <span title="Azure" className="devicon-azure-plain text-5xl"></span>
          <span title="AngularJS" className="devicon-angularjs-plain text-5xl"></span>
          <span title="NextJS" className="devicon-nextjs-original-wordmark text-5xl"></span>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Enterprise Web Rebuild</h3>
            <p className="mb-4">Rebuilding a complex enterprise app using Node.js and Next.js, enhancing performance and scalability.</p>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">Next.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">Node.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">TypeScript</span>
            </div>
            <div className="flex space-x-4">
              <Button>Live Demo</Button>
              <Button variant="outline">View Code</Button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Enterprise Web Rebuild</h3>
            <p className="mb-4">Rebuilding a complex enterprise app using Node.js and Next.js, enhancing performance and scalability.</p>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">Next.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">Node.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">TypeScript</span>
            </div>
            <div className="flex space-x-4">
              <Button>Live Demo</Button>
              <Button variant="outline">View Code</Button>
            </div>
          </div>
          {/* More project cards can go here */}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div>
          <h3 className="text-xl font-bold">App Developer – LAZ Parking</h3>
          <p className="text-sm text-gray-400">Aug 2023 – Present</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Developed a deployable application that aggregates files of different types from various server locations 
              and compiles them into structured PDF packages.
            </li>
            <li>
              Developed a C# Azure Function to securely decrypt, process, and manipulate files from an SFTP directory, 
              seamlessly transmitting the extracted data via API integrations.
            </li>
            <li>Created and maintained pipelines in Azure Data Factory, utilizing SQL and PowerShell scripts.</li>
          </ul>
        </div>
        <br/>
        <div>
          <h3 className="text-xl font-bold">Software Engineer/IT Manager – Ivy Biomedical Systems</h3>
          <p className="text-sm text-gray-400">June 2022 – Aug 2023</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Developed a web application that generates and prints various order labels based on user-provided shipping numbers.
            </li>
            <li>
              Developed a database-driven web application enabling employees to input information in a structured 
              report format, as well as view, edit, and print previously created reports.
            </li>
            <li>Maintained essential IT infrastructure (i.e., desktops, servers, email systems, security tools, and company databases). </li>
            <li>Performed a company wide email server transfer from Intermedia to Microsoft 365.</li>
            <li>Implemented security measures to protect sensitive data and ensure compliance with industry standards.</li>
            <li>Provided technical support and training to employees, enhancing their proficiency with software and hardware.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-20 px-4 bg-gray-900 ">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-6 max-w-4xl mx-auto">Whether you're interested in collaborating on a project, have a question about my work, or just want to talk tech, feel free to reach out! 
          I'm always open to new opportunities and conversations in the world of software engineering.</p>
        <div className="space-x-4">
          <Button>Email Me</Button>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/drmaguire/">
            <Button variant="outline">LinkedIn</Button>
          </a>
          <Button variant="outline">GitHub</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} David Maguire · Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
