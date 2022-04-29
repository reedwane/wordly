import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export const DataProvider = ({ children }) => {
  const [initialDefinition, updateInitialDefinition] = useState(null);
  const [newDefinition, updateNewDefinition] = useState(null);
  const [fetchError, updateFetchError] = useState(false);

  const setInitialDefinition = (definition) => {
    updateInitialDefinition(definition);
  };

  const setNewDefinition = (definition) => {
    updateNewDefinition(definition);
  };

  const setFetchError = (bool) => {
    updateFetchError(bool);
  };

  const contexts = {
    initialDefinition,
    setInitialDefinition,
    newDefinition,
    setNewDefinition,
    fetchError,
    setFetchError,
  };

  return (
    <DataContext.Provider value={contexts}>{children}</DataContext.Provider>
  );
};
