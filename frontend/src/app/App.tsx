import { AppProviders } from "./providers/AppProviders";
import { AppRouter } from "./router/router";

function App() {
  return (
    <>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </>
  );
}

export default App;
