import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  return context;
};

const LoadingProvider = ({ children }) => {
  const [isLoading, updateLoading] = useState(false);

  const setLoading = (value) => {
    updateLoading(value);
  };

  const contexts = { isLoading, setLoading };

  return (
    <LoadingContext.Provider value={contexts}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
