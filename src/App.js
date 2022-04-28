// #9B59B6

import Definition from "components/Definition";
import Header from "components/Header";
import { DataProvider } from "context/DataContext";
import LoadingProvider from "context/LoadingContext";

function App() {
  return (
    <div className="App">
      <Header />

      <LoadingProvider>
        <DataProvider>
          <Definition />
        </DataProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
