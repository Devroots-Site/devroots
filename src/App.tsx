import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from './page/Landing/Landing';
import AboutMe from './page/AboutMe/AboutMe';
import Docs from './page/Docs/Docs';
import Tools from './page/Tools/Tools';
import Ressource from './page/Ressource/Ressource';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/Theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/ressources" element={<Ressource />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
