import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Search from "./pages/Search";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Search />
    </ThemeProvider>
  );
};

export default App;