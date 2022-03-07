import * as UI from '@mui/material';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResult from '../../components/SearchPage/SearchResult/SearchResult';

import { skipToken } from "@reduxjs/toolkit/query"
import { useState } from 'react';
import { useGetBookByNameQuery } from '../../services/bookApi';



const SearchPage = () => {
    
    const [books, setBooks] = useState([])
    const [countResult, setCountResult] = useState([])
    
    const [value, setValue] = useState('')


    
    const { data , error, isLoading } = useGetBookByNameQuery(value)


    const theme = UI.createTheme({
        typography: {
          fontSize: 5,
          h1: {
            "fontWeight": 700,
          },
        },
    });

    

    const getResource =  (event) => {
     
        event.preventDefault();
        if(data !== undefined){
            const bookList = data.items.map((item) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    img: item.volumeInfo?.imageLinks?.thumbnail,
                    authors: item.volumeInfo?.authors,
                    categories: item.volumeInfo?.categories
                }
                })
                setBooks(bookList)
                setCountResult(data.totalItems)
        } 
    }
    


    const handleChange = (e) => {
        setValue(e.target.value)
    }
  

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
            <SearchInput 
                handleInput={getResource}
                value={value}
                handleChange={handleChange}
            />
            <SearchResult countResult={countResult} books={books}/>
        </>
    );
};

export default SearchPage;