import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from './page/Landing/Landing';
import AboutMe from './page/AboutMe/AboutMe';
import DocumentationPage from './page/DocumentationPage';
import Tools from './page/Tools/Tools';
import Websites from './page/Websites/Websites';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/Theme';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // 🔁 no retry on failure
            staleTime: 0,
            gcTime: 0,
        },
    },
});
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Landing />} />
                        <Route path="/docs" element={<DocumentationPage />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/websites" element={<Websites />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
