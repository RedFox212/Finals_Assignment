import React from 'react';

const BioContent: React.FC = () => {
  return (
    <div className="bio">
      <h3>About Me</h3>
      <p>With a background in software engineering and a keen eye for design, I bridge the gap between technical complexity and user-friendly interfaces.</p>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '2rem auto' }}>
        <ul>
          <li><strong>Tech Stack:</strong> React, TypeScript, Node.js</li>
          <li><strong>Focus:</strong> Performance, Accessibility, Scalable Architecture</li>
          <li><strong>Hobbies:</strong> Open Source, UI/UX Research, Digital Art</li>
        </ul>
      </div>
    </div>
  );
};

export default BioContent;
