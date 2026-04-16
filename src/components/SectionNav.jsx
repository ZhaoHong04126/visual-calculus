/* src/components/SectionNav.jsx */
import React from 'react';
import './SectionNav.css';

export default function SectionNav({ sections }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="section-nav-container">
      <div className="section-nav-title">快速導覽</div>
      <ul className="section-nav-list">
        {sections.map((section) => (
          <li key={section.id} className="section-nav-item">
            <a 
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
