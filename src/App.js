import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionAbout } from "./components/SectionAbout";
import { SectionProjects } from "./components/SectionProjects";
import { GlobalStyles } from "./components/styles/globalStyles";
import { theme } from "./components/styles/theme";
import { Title } from "./components/Title";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Title />
      <SectionAbout />
      <SectionProjects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
