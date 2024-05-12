import React from 'react';
import { useEffect, useState } from 'react';
import DashProjects from '../Pages/DashProjects/DashProjects';


const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
  
    useEffect(() => {
      fetchProjects();
    }, []); 
  
    const fetchProjects = async () => {
      try {
        const response = await fetch('API');
        if (!response.ok) {
          throw new Error('error');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
  
    return (
      <DashProjects projects={projects} />
    );
  };

  export default ProjectsPage;