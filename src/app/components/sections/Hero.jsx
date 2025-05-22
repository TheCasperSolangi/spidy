import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Hero() {
  // Animation states
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [codeLines, setCodeLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalText, setTerminalText] = useState('');

  const devSteps = [
    'Initializing project...',
    'Installing dependencies...',
    'Compiling source files...',
    'Running tests...',
    'Building application...',
    'Deployment complete!'
  ];

  const codeSnippets = [
    'import React from "react";',
    'import { createApp } from "./utils";',
    'const App = () => {',
    '  return (',
    '    <div className="app">',
    '      <header>My App</header>',
    '      <main>Content</main>',
    '    </div>',
    '  );',
    '};',
    'export default App;'
  ];

  const terminalLines = [
    '> npm create vite@latest my-project',
    '> cd my-project',
    '> npm install',
    '> npm run dev',
    'VITE v4.4.9 ready in 300ms',
    'Local: http://localhost:5173/',
    'Network: use --host to expose'
  ];

  // Simulate typing effect for code
  useEffect(() => {
    if (codeLines.length < codeSnippets.length) {
      const timer = setTimeout(() => {
        setCodeLines([...codeLines, codeSnippets[codeLines.length]]);
      }, Math.random() * 700 + 300);
      return () => clearTimeout(timer);
    }
  }, [codeLines]);

  // Simulate typing effect for terminal
  useEffect(() => {
    if (terminalText.length < terminalLines.join('\n').length) {
      const fullText = terminalLines.join('\n');
      const timer = setTimeout(() => {
        setTerminalText(fullText.substring(0, terminalText.length + 1));
      }, Math.random() * 50 + 30);
      return () => clearTimeout(timer);
    }
  }, [terminalText]);

  // Simulate progress for loading bar
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        const increment = Math.floor(Math.random() * 5) + 1;
        setProgress(prev => {
          const newProgress = Math.min(prev + increment, 100);
          // Update active step based on progress
          if (newProgress >= 95 && activeStep !== 5) {
            setActiveStep(5);
          } else if (newProgress >= 75 && activeStep !== 4) {
            setActiveStep(4);
          } else if (newProgress >= 55 && activeStep !== 3) {
            setActiveStep(3);
          } else if (newProgress >= 35 && activeStep !== 2) {
            setActiveStep(2);
          } else if (newProgress >= 15 && activeStep !== 1) {
            setActiveStep(1);
          }
          return newProgress;
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress, activeStep]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Turning <span className="gradient-text">Ideas</span> Into
              <br />Digital <span className="gradient-text">Reality</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              We craft innovative software solutions that empower businesses to thrive in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
                <Link href="/contact">
              <Button size="lg" className="gradient-bg">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
              <Link href="/portfolio">
              <Button size="lg" variant="outline">
                Our Work
              </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="w-full h-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full"></div>
              <div className="absolute bottom-8 right-4 w-40 h-40 bg-purple-500/10 rounded-full"></div>
              
              {/* Dev Environment Animation */}
              <div className="w-full max-w-lg bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
                {/* Tabs Bar */}
                <div className="w-full h-8 bg-gray-800 flex items-center px-3 gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-gray-300 flex space-x-4">
                    <span className="px-3 py-1 bg-gray-700 rounded-t">App.jsx</span>
                    <span className="px-3 py-1">Terminal</span>
                  </div>
                </div>
                
                {/* Code Editor */}
                <div className="p-4 bg-gray-950 h-64 flex">
                  {/* Line Numbers */}
                  <div className="text-gray-500 text-xs pr-4 select-none text-right">
                    {codeLines.map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                    {codeLines.length < codeSnippets.length && <div>{codeLines.length + 1}</div>}
                  </div>
                  
                  {/* Code Content */}
                  <div className="text-gray-200 text-xs font-mono flex-1">
                    {codeLines.map((line, i) => (
                      <div key={i}>
                        <span className="text-blue-400">{line.includes('import') ? 'import ' : ''}</span>
                        <span className="text-green-400">{line.includes('React') ? 'React ' : ''}</span>
                        <span className="text-yellow-400">{line.includes('const') ? 'const ' : ''}</span>
                        <span>{line.replace(/import |React |const /g, '')}</span>
                      </div>
                    ))}
                    {codeLines.length < codeSnippets.length && (
                      <div className="h-4 relative">
                        {showCursor && <span className="absolute h-4 w-2 bg-white animate-pulse"></span>}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Terminal */}
                <div className="bg-black p-4 h-40 text-green-400 text-xs font-mono overflow-hidden">
                  <pre className="whitespace-pre-wrap">{terminalText}</pre>
                  {showCursor && terminalText.length < terminalLines.join('\n').length && (
                    <span className="inline-block h-4 w-2 bg-green-400 animate-pulse"></span>
                  )}
                </div>
                
                {/* Progress Section */}
                <div className="p-4 bg-gray-800">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>{devSteps[activeStep]}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" 
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                  
                  {/* Step Indicators */}
                  <div className="flex justify-between mt-3">
                    {devSteps.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${
                          index <= activeStep ? 'bg-purple-500' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}