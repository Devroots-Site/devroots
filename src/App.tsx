import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/Theme';
import { Box, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LandingPage from './page/Landing.page';
import { DocumentationPage } from './page';
import Footer from './components/Footer';
import ToolsPage from './page/Tools.page';
import WebsitesPage from './page/Websites.page';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // 🔁 no retry on failure
            staleTime: 0,
            gcTime: 0,
        },
    },
});
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}
                >
                    {/* Content area with flex-grow */}
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <BrowserRouter>
                            <Routes>
                                <Route index element={<LandingPage />} />
                                <Route path="/docs" element={<DocumentationPage />} />
                                <Route path="tools" element={<ToolsPage />} />
                                <Route path="websites" element={<WebsitesPage />} />
                            </Routes>
                        </BrowserRouter>
                    </Box>

                    <Footer />
                </Box>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
