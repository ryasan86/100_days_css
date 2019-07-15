import React, { useState, createContext, useEffect } from 'react';

const projects = [
  { title: '001 Title', hash: 'rEgzmB' },
  { title: '002 Menu Icon', hash: 'agxrqY' },
  { title: '084 Book Cover', hash: 'vqMOYQ' },
];

const LocalDataContext = createContext(null);

const LocalDataProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  useEffect(() => console.log(selectedProject), [selectedProject]);

  return (
    <LocalDataContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </LocalDataContext.Provider>
  );
};

export { projects, LocalDataContext };
export default LocalDataProvider;
