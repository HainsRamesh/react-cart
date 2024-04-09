// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { AppProvider } from "./Context";

function App() {
  return (
    <main>
      <AppProvider>
        <Navbar />
        <CartContainer />
      </AppProvider>
    </main>
  );
}

export default App;
