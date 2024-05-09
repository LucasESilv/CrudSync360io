import GlobalStyle from "./styles/global.js";
import "react-toastify/dist/ReactToastify.css";
import { AppContextProvider } from "./components/AppContextProvider.jsx";
import { HeaderComponent } from "./components/Header.jsx";

function App() {
  return (
    <div className="App">
      <>
        <AppContextProvider>
          <HeaderComponent />
          <GlobalStyle />
        </AppContextProvider>
      </>
    </div>
  );
}

export default App;
