import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export const DataProvider = ({ children }) => {
  const [initialDefinition, updateInitialDefinition] = useState(null);
  const [newDefinition, updateNewDefinition] = useState(null);

  const setInitialDefinition = (definition) => {
    updateInitialDefinition(definition);
  };

  const setNewDefinition = (definition) => {
    updateNewDefinition(definition);
  };

  const contexts = {
    initialDefinition,
    setInitialDefinition,
    newDefinition,
    setNewDefinition,
  };

  return (
    <DataContext.Provider value={contexts}>{children}</DataContext.Provider>
  );
};
