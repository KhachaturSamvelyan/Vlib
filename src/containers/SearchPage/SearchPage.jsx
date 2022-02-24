import * as UI from '@mui/material';
import SearchInput from '../../components/SearchInput/SearchInput';
import { getApiResource } from '../../utils/api';
import { API_KEY, API_URL_SEARCH, API_TITLE_SEARCH } from '../../constants/constants';

import { useState, useEffect } from 'react';




const SearchPage = () => {

    const [books, setBooks] = useState([])

    const theme = UI.createTheme({
        typography: {
          fontSize: 5,
          h1: {
            "fontWeight": 700,
          },
        },
    });

    const query = 'Js';
    const searchUrl = API_URL_SEARCH+query+API_TITLE_SEARCH+API_KEY;

    const getResource = async () => {
        const res = await getApiResource(searchUrl);
        const bookList = res.items.map((item) => {
            return {
                id: item.id,
                title: item.volumeInfo.title,
                img: item.volumeInfo?.imageLinks?.thumbnail
            }
        })
        console.log(bookList)
        setBooks(bookList)
    }
    

    useEffect(() => {
        getResource();
    }, []);

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
            <SearchInput/>
            <div>
                {
                    books.map((item, index)=>{
                        return (
                            <div key={item.id+index}>
                                <img src={item.img} alt={item.title}></img>
                                <h4>{item.title}</h4>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};

export default SearchPage;