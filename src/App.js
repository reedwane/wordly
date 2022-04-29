// #9B59B6

import Definition from "components/Definition";
import Header from "components/Header";
import SearchInput from "components/SearchInput";
import { DataProvider } from "context/DataContext";
import LoadingProvider from "context/LoadingContext";

function App() {
  return (
    <div className="App">
      <Header />

      <LoadingProvider>
        <DataProvider>
          <SearchInput />
          <Definition />
        </DataProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
