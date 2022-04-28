// #9B59B6

import Header from "components/Header";
import Loading from "components/Loading";
import { DataProvider } from "context/DataContext";
import LoadingProvider from "context/LoadingContext";
import useFetch from "hooks/useFetch";

function App() {
  useFetch();
  return (
    <div className="App">
      <Header />

      <LoadingProvider>
        <DataProvider>
          <h1>Hello</h1>
          <Loading />
        </DataProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
