import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'project1.jpg',
    demoLink: 'https://example.com/project1-demo',
    codeLink: 'https://github.com/example/project1'
  },
  {
    title: 'Project 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'project2.jpg',
    demoLink: 'https://example.com/project2-demo',
    codeLink: 'https://github.com/example/project2'
  },
  // Add more projects here
];

const ProjectGallery = () => {
  return (
    <section className='projectpage'>
    <div className="section-header">
      <h2 className='projectpage-title'>Projects</h2>
      <p>Here are some of the projects, I have built:</p>
    </div>
    <div className="project-gallery">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      ))}
    </div>
    </section>
  );
};

export default ProjectGallery;
