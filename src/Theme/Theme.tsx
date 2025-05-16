import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    color: 'inherit',
                },
            },
        },
    },
});

export { theme };
