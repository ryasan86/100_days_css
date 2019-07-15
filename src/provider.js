import React, { useState, createContext } from 'react';

const projects = [
  { title: '001 Title', hash: 'rEgzmB' },
  { title: '002 Menu Icon', hash: 'agxrqY' },
  { title: '084 Book Cover', hash: 'vqMOYQ' },
];

const LocalDataContext = createContext(null);

const initialProjectState = { project: projects[0] };

const LocalDataProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(initialProjectState);

  return (
    <LocalDataContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </LocalDataContext.Provider>
  );
};

export { projects, LocalDataContext };
export default LocalDataProvider;
