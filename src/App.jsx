import Container from "./components/Container";
import { StoreContextProvider } from "./context/storeContext";

function App() {
  return (
    <div className="container">
      <h2>App</h2>
      <StoreContextProvider>
        <Container />
      </StoreContextProvider>
    </div>
  );
}

export default App;
