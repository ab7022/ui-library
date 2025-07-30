import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import  {FileUpload}  from '@abdul__bayees/ui-library';
import { FileUpload } from '@abdul__bayees/ui-library';
import { FileUploadConfig } from "@abdul__bayees/ui-library";

// Aurora-inspired color palette for glassy/gradient background
const COLORS = {
  primary: 'bg-fuchsia-700/80 text-white hover:bg-fuchsia-600/90', // magenta accent
  secondary: 'bg-cyan-600/80 text-white hover:bg-cyan-500/90',    // cyan accent
  accent: 'bg-purple-700/80 text-white hover:bg-purple-600/90',   // purple accent
  gold: 'bg-yellow-400/80 text-black hover:bg-yellow-300/90',     // gold accent
  glass: 'bg-white/10 backdrop-blur-md',
  border: 'border-white/20',
  text: 'text-white',
  textSubtle: 'text-fuchsia-100',
};

// Default configuration for file upload components (aurora theme)
const defaultConfig: FileUploadConfig = {
  variant: 'button',
  acceptedTypes: ['image/png', 'image/jpeg'],
  maxSizeMB: 2,
  multiple: false,
  labels: {
    uploadButton: 'Upload File',
    fileTypeInvalid: 'Only PNG/JPEG allowed.',
    fileSizeExceed: 'File too large!',
    preview: 'Selected file:',
    placeholder: 'No file selected',
    dropzone: 'Drag & drop files here or click to browse',
    removeFile: 'Remove file',
  },
  theme: {
    borderRadius: 'rounded-lg',
    size: 'md',
    iconPlacement: 'left',
    color: 'border-fuchsia-400',
    bgColor: 'bg-white/10 backdrop-blur-md',
    textColor: 'text-white',
    focusRing: 'focus:ring-2 focus:ring-fuchsia-400',
  },
};

// Header component
function Header() {
  return (
    <header className="w-full py-4 bg-white/10 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-700/80 p-2 rounded-lg">
            <span className="text-xl text-white">📁</span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">file-upload-ui-lib</span>
            <span className="hidden md:inline text-xs bg-fuchsia-900/60 text-fuchsia-100 rounded-full px-2 py-1 ml-3">v1.0.0</span>
          </div>
        </div>
        <nav className="mt-4 md:mt-0 flex gap-1 sm:gap-4">
          <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors">
            Features
          </a>
          <a href="#variants" className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors">
            Components
          </a>
          <a href="#live-config" className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors">
            Config Editor
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener" className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

// Hero section component
function Hero() {
  return (
    <section className="py-10 sm:py-16 md:py-28 relative overflow-hidden">
      {/* Prismatic Aurora Burst - Multi-layered Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-0">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-widest text-fuchsia-200 uppercase border border-fuchsia-400/20 backdrop-blur-sm">
            Modern React File Upload
          </span>
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Beautiful File Upload <span className="text-fuchsia-400">Components</span>
          </h1>
          <p className="text-base xs:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-xl">
            A modern, accessible, and highly customizable file upload component library for React. <br className="hidden md:block" />
            Built with TailwindCSS and designed for seamless integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#variants" 
              className={`w-full sm:w-auto text-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${COLORS.primary} shadow-md hover:shadow-lg`}
            >
              View Components
            </a>
            <a 
              href="https://www.npmjs.com/package/file-upload-ui-lib" 
              target="_blank" 
              rel="noopener" 
              className="w-full sm:w-auto text-center px-8 py-3 rounded-lg font-semibold bg-neutral-900 text-neutral-100 border border-neutral-700 shadow hover:shadow-lg transition-all duration-300"
            >
              Install via npm
            </a>
          </div>
        </div>
        {/* Right: Visual Accent */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 sm:mt-12 md:mt-0">
          <div className="relative w-[220px] h-[220px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center">
            {/* Glassy Card with Icon and Aurora Glow */}
            <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl" style={{boxShadow: '0 8px 40px 0 rgba(255,255,255,0.08)'}} />
            <div className="relative flex flex-col items-center justify-center h-full z-10">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-2xl bg-fuchsia-700/80 flex items-center justify-center mb-4 sm:mb-6 shadow-lg border-4 border-fuchsia-400/30">
                <span className="text-3xl xs:text-4xl text-white">📁</span>
              </div>
              <span className="text-base xs:text-lg font-semibold text-white/80 mb-1 sm:mb-2">file-upload-ui-lib</span>
              <span className="text-xs bg-fuchsia-900/60 text-fuchsia-100 rounded-full px-2 xs:px-3 py-1">v1.0.0</span>
            </div>
            {/* Aurora Glow Overlay */}
            <div className="absolute -inset-2 xs:-inset-4 rounded-3xl pointer-events-none" style={{background: 'radial-gradient(ellipse 80% 60% at 60% 30%, rgba(255,20,147,0.12), transparent 70%)'}} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Features section component
function Features() {
  const features = [
    {
      title: "Config-Driven",
      description: "Fully customizable through JSON configuration without touching code",
      icon: "⚙️"
    },
    {
      title: "Accessible",
      description: "Built with accessibility in mind, keyboard navigable and screen reader friendly",
      icon: "♿"
    },
    {
      title: "Multiple Variants",
      description: "Choose from button, dropzone, image preview, and multi-file variants",
      icon: "🔄"
    },
    {
      title: "Themeable",
      description: "Easily customize colors, sizes, borders, and spacing with Tailwind classes",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <section id="features" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need for modern file upload experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/60 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-white/10">
                <div className="text-3xl mb-4 text-white/80">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Component card for showcasing variants
function ComponentCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  // Center Button Variant button, and use dark bg for all cards
  const isButtonVariant = title === "Button Variant";
  return (
    <div className="bg-black/70 rounded-xl shadow-md p-6 flex flex-col items-center mb-8 border border-fuchsia-400/30 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-fuchsia-700/30 flex items-center justify-center mb-4">
        <span className="text-fuchsia-100 text-xl">📁</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-fuchsia-100 mb-4 text-center">{description}</p>
      <div className={isButtonVariant ? "w-full flex justify-center" : "w-full"}>
        {children}
      </div>
    </div>
  );
}

// All variants showcase
function AllVariantsDemo() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <section id="variants" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Component Variants</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore the different file upload components with various configurations and styles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComponentCard title="Button Variant" description="Classic button-based file upload. Accessible and themeable.">
              <FileUpload config={{
                ...defaultConfig,
                variant: 'button',
                theme: {
                  ...defaultConfig.theme,
                  bgColor: 'bg-black/80',
                  textColor: 'text-white',
                  color: 'border-fuchsia-400',
                  focusRing: 'focus:ring-2 focus:ring-fuchsia-400',
                },
              }} />
            </ComponentCard>
            <ComponentCard title="Dropzone Variant" description="Drag-and-drop or click to upload. Keyboard accessible.">
              <FileUpload config={{
                ...defaultConfig,
                variant: 'dropzone',
                theme: {
                  ...defaultConfig.theme,
                  bgColor: 'bg-black/80',
                  textColor: 'text-white',
                  color: 'border-cyan-400',
                  focusRing: 'focus:ring-2 focus:ring-cyan-400',
                },
                labels: {
                  ...defaultConfig.labels,
                  dropzone: 'Drop an image or click to select',
                },
              }} />
            </ComponentCard>
            <ComponentCard title="Preview Layout Variant" description="Shows a large preview of the selected image or file.">
              <FileUpload config={{
                ...defaultConfig,
                variant: 'image-preview',
                theme: {
                  ...defaultConfig.theme,
                  bgColor: 'bg-black',
                  textColor: 'tex t-white',
                  color: 'border-purple-400',
                  focusRing: 'focus:ring-2 focus:ring-purple-400',
                },
                labels: {
                  ...defaultConfig.labels,
                  uploadButton: 'Select file for preview',
                },
              }} />
            </ComponentCard>
            <ComponentCard title="Image-Only Variant" description="Accepts only images. Shows a preview.">
              <FileUpload config={{
                ...defaultConfig,
                variant: 'image-only',
                theme: {
                  ...defaultConfig.theme,
                  bgColor: 'bg-black/80',
                  textColor: 'text-white',
                  color: 'border-cyan-400',
                  focusRing: 'focus:ring-2 focus:ring-cyan-400',
                },
                labels: {
                  ...defaultConfig.labels,
                  uploadButton: 'Select image only',
                },
              }} />
            </ComponentCard>
            <ComponentCard title="Multi-file Variant" description="Select and preview multiple files at once.">
              <FileUpload config={{
                ...defaultConfig,
                variant: 'multi-file',
                multiple: true,
                theme: {
                  ...defaultConfig.theme,
                  bgColor: 'bg-black/80',
                  textColor: 'text-white',
                  color: 'border-yellow-400',
                  focusRing: 'focus:ring-2 focus:ring-yellow-400',
                },
                labels: {
                  ...defaultConfig.labels,
                  uploadButton: 'Select multiple files',
                },
              }} />
            </ComponentCard>
          </div>
        </div>
      </section>
    </div>
  );
}

// Live config editor component
function LiveConfigDemo() {
  const [config, setConfig] = React.useState<FileUploadConfig>(defaultConfig);
  const [json, setJson] = React.useState(JSON.stringify(defaultConfig, null, 2));
  const [error, setError] = React.useState<string | null>(null);

  // Available variants for dropdown
  const variantOptions = [
    { value: 'button', label: 'Button' },
    { value: 'dropzone', label: 'Dropzone' },
    { value: 'image-preview', label: 'Preview Layout' },
    { value: 'image-only', label: 'Image Only' },
    { value: 'multi-file', label: 'Multi-file' },
  ];

  // When dropdown changes, update config and JSON
  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value as FileUploadConfig['variant'];
    const updatedConfig = { ...config, variant: newVariant };
    setConfig(updatedConfig);
    setJson(JSON.stringify(updatedConfig, null, 2));
    setError(null);
  };

  // When JSON changes, update config and keep dropdown in sync
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setConfig(parsed);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <section id="live-config" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Config Editor</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Customize the FileUpload component in real-time with JSON configuration
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/60 rounded-xl shadow-md p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Configuration</h3>
                <div className="flex items-center">
                  <span className="text-xs font-medium bg-white/10 text-white px-2 py-1 rounded-full">
                    JSON
                  </span>
                </div>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                <label htmlFor="variant-select" className="text-sm text-white/80 font-medium mr-2">Component Variant:</label>
                <select
                  id="variant-select"
                  className="bg-black/80 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  value={config.variant}
                  onChange={handleVariantChange}
                >
                  {variantOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-white/80 mb-4">
                Edit the JSON below to customize the FileUpload component.
              </p>
              <div className="relative">
                <textarea
                  className={`w-full h-80 p-4 border rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-white/30 focus:border-white/30 bg-black/80 text-white ${
                    error ? 'border-red-500' : 'border-white/20'
                  }`}
                  value={json}
                  onChange={handleChange}
                  aria-label="JSON config editor"
                  spellCheck={false}
                />
                {error && (
                  <div className="absolute top-2 right-2 bg-red-900 text-red-200 text-xs px-2 py-1 rounded">
                    {error}
                  </div>
                )}
              </div>
              <div className="mt-4 text-xs text-white/60">
                <p className="mb-1"><b>Options:</b> variant, acceptedTypes, maxSizeMB, multiple, labels, theme, etc.</p>
                <p>See code comments for all options and examples.</p>
              </div>
            </div>
            <div className="bg-black/60 rounded-xl shadow-md p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Preview</h3>
                <div className="flex items-center">
                  <span className="text-xs font-medium bg-green-900 text-green-200 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>
              </div>
              <div className="min-h-[200px] flex items-center justify-center">
                <FileUpload config={config} key={json} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Installation guide component
function InstallationGuide() {
  const installationSteps = [
    {
      title: "Install the package",
      command: "npm install file-upload-ui-lib"
    },
    {
      title: "Import the component",
      code: "import { FileUpload } from 'file-upload-ui-lib';"
    },
    {
      title: "Use with config",
      code: "<FileUpload config={{ variant: 'button', acceptedTypes: ['image/png'] }} />"
    }
  ];

  // EditorBro-style copy button and code block
  const [copiedStep, setCopiedStep] = React.useState<number | null>(null);
  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(index);
      setTimeout(() => setCopiedStep(null), 1200);
    } catch (err) {}
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started in Seconds</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Follow these simple steps to integrate file-upload-ui-lib into your project
            </p>
          </div>
          <div className="bg-black/60 rounded-2xl shadow-xl p-6 border border-white/10">
            <ol className="relative border-l-2 border-fuchsia-700/40 ml-4">
              {installationSteps.map((step, index) => {
                const codeText = step.command || step.code || '';
                // Split code into lines for line numbers
                const codeLines = codeText.split('\n');
                return (
                  <li key={index} className="mb-10 ml-6 last:mb-0 relative">
                    {/* Step dot */}
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-700/80 border-4 border-fuchsia-400/30 text-white font-bold text-lg shadow-md">
                      {index + 1}
                    </span>
                    <div className="bg-black/80 rounded-xl shadow p-5 border border-white/10">
                      <span className="font-semibold text-lg text-white block mb-2">{step.title}</span>
                      <div className="relative group mt-2">
                        <div className="editorbro-mockup bg-[#181A20] border border-[#23262F] rounded-lg overflow-hidden font-mono text-sm shadow-lg relative">
                          {/* EditorBro top bar */}
                          <div className="flex items-center justify-between px-3 py-2 bg-[#23262F] border-b border-[#23262F]">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-1" />
                              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block mr-1" />
                              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                            </div>
                            <span className="text-xs text-[#A3A7B7] font-semibold select-none">{step.command ? 'Terminal' : 'App.tsx'}</span>
                            <button
                              type="button"
                              aria-label="Copy to clipboard"
                              className="ml-2 px-2 py-1 rounded bg-[#23262F] text-[#A3A7B7] hover:text-white hover:bg-fuchsia-700/80 border border-[#23262F] hover:border-fuchsia-400/60 text-xs font-semibold flex items-center gap-1 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                              onClick={() => handleCopy(codeText, index)}
                            >
                              {copiedStep === index ? (
                                <>
                                  <svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                  Copied
                                </>
                              ) : (
                                <>
                                  <svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><rect x="3" y="3" width="13" height="13" rx="2" /></svg>
                                  Copy
                                </>
                              )}
                            </button>
                          </div>
                          {/* Code area with line numbers */}
                          <div className="flex w-full">
                            <div className="py-3 px-2 bg-[#181A20] text-[#4B5162] text-xs select-none text-right min-w-[2.5em] border-r border-[#23262F]">
                              {codeLines.map((_, i) => (
                                <div key={i} className="leading-6">{i + 1}</div>
                              ))}
                            </div>
                            <pre className="py-3 px-4 bg-transparent text-[#F8F8F2] whitespace-pre-wrap break-words overflow-x-auto w-full">
                              {codeText}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="w-full py-4 bg-black/80 border-t border-white/10 text-white text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="text-lg font-bold tracking-tight">file-upload-ui-lib</span>
          <span className="text-xs bg-fuchsia-900/60 text-fuchsia-100 rounded-full px-2 py-1 ml-2">v1.0.0</span>
        </div>
        <nav className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener" className="text-white/60 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">Examples</a>
        </nav>
      </div>
      <div className="text-center text-white/40 text-xs mt-2">&copy; {new Date().getFullYear()} file-upload-ui-lib</div>
    </footer>
  );
}

// Main App component
function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 font-sans text-neutral-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AllVariantsDemo />
        <InstallationGuide />
        <LiveConfigDemo />
      </main>
      <Footer />
    </div>
  );
}

// Prevent multiple createRoot calls on the same container
const rootElement = document.getElementById('root');
if (rootElement) {
  // @ts-ignore
  if (!window.__REACT_ROOT__) {
    // @ts-ignore
    window.__REACT_ROOT__ = ReactDOM.createRoot(rootElement);
  }
  // @ts-ignore
  window.__REACT_ROOT__.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
