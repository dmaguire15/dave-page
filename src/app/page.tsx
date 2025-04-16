import React from "react";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-purple-900 via-indigo-800 to-black text-white">
      {/* Main Title Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-6">
        {/* Profile Photo */}
        <img
          src="/davepic.png"
          alt="David Maguire"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
        />
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">David Maguire</h1>
          <p className="text-lg md:text-2xl mt-2">
            Software Engineer | Backend Specialist | Full Stack Developer
          </p>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <Button>View My Work</Button>
          <Button variant="outline">Download Resume</Button>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto py-6 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a passionate software engineer who thrives on solving complex problems and
          building clean, scalable systems. Over the past 3+ years, I've worked with a
          variety of technologies and languages, including C#, TypeScript, SQL, Azure, and Angular.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {/* Example tech icons */}
          <span className="bg-gray-800 px-3 py-1 rounded">C#</span>
          <span className="bg-gray-800 px-3 py-1 rounded">TypeScript</span>
          <span className="bg-gray-800 px-3 py-1 rounded">SQL</span>
          <span className="bg-gray-800 px-3 py-1 rounded">Azure</span>
          <span className="bg-gray-800 px-3 py-1 rounded">Angular</span>
          <span className="bg-gray-800 px-3 py-1 rounded">Node.js</span>
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
          {/* More project cards can go here */}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div>
          <h3 className="text-xl font-bold">Software Engineer – Your Company</h3>
          <p className="text-sm text-gray-400">Jan 2021 – Present</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Maintained and updated large-scale enterprise applications.</li>
            <li>Built custom Azure Data Factory pipelines for automated workflows.</li>
            <li>Wrote optimized SQL scripts for data cleansing and encryption tasks.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-20 px-4 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-6">Let's build something together. Reach out for freelance work, collaborations, or just to say hey!</p>
        <div className="space-x-4">
          <Button>Email Me</Button>
          <Button variant="outline">LinkedIn</Button>
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
