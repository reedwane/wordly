import Definition from "components/Definition";
import Footer from "components/Footer";
import Header from "components/Header";
import SearchInput from "components/SearchInput";
import { DataProvider } from "context/DataContext";
import LoadingProvider from "context/LoadingContext";
import { AppWrapper } from "styles/styledComponents/appWrapper";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Header />

        <LoadingProvider>
          <DataProvider>
            <SearchInput />
            <Definition />
          </DataProvider>
        </LoadingProvider>

        <Footer />
      </AppWrapper>
    </div>
  );
}

export default App;
