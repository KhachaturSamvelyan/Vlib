import * as UI from '@mui/material';

const SearchPage = () => {

    const theme = UI.createTheme({
        typography: {
          fontSize: 7,
          h1: {
            "fontWeight": 700,
          },
        },
    });

    return (
        <>
            <UI.Box sx={{ 
                textAlign: 'center',
                color: 'white',
                m: '40px 0'
                
                
            }}>
                <UI.ThemeProvider theme={theme}>
                    <UI.Typography variant="h1">Search for book</UI.Typography>
                </UI.ThemeProvider>
            </UI.Box>
        </>
    );
};

export default SearchPage;