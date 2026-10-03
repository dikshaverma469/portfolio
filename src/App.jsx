import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VerticalSpines from './components/VerticalSpines';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dikshaverma0029@gmail.com');
    setCopied(true);
    setToastMessage('EMAIL COPIED: dikshaverma0029@gmail.com');
    setToastVisible(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);

    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#161514] font-sans relative selection:bg-[#c1603e]/20 selection:text-[#a84d2d]">
      
      {/* Magazine Fixed Vertical Spine Stamps on screen edges */}
      <VerticalSpines />

      {/* Main Content Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Section 1: Hero / Cover */}
          <Hero onCopyEmail={handleCopyEmail} copied={copied} />

          {/* Section 2: Selected Projects & Research */}
          <ProjectsSection onSelectProject={setSelectedProject} />

          {/* Section 3: Skills & Competencies */}
          <SkillsSection />

          {/* Section 4: Education, Leadership & Achievements */}
          <EducationSection />

          {/* Section 5: Testimonials ("What Peers Say") */}
          <Testimonials />

          {/* Section 6: Contact & Colophon Footer */}
          <ContactFooter onCopyEmail={handleCopyEmail} copied={copied} />
        </main>
      </div>

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />
      
    </div>
  );
}
