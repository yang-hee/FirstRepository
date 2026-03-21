
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {

  // const [themeName, setThemeName] = useState<ThemeName>("light");
  // themeContext에 설정해 놓은 값 가져옴 light
  // const {themeName, setThemeName} = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider> 
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
