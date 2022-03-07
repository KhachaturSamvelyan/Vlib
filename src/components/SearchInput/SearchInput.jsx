import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput({handleInput, value, handleChange}) {
  return (
    <Paper
      component="form"
      onSubmit={handleInput}
      sx={{ 
            p: '2px 4px',
            m: '0 auto',
            display: 'flex', 
            alignItems: 'center', 
            width: 600 
        }}
    >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search books"
            defaultValue={value}
            onChange={handleChange}
           
            
        />
        <IconButton onClick={handleInput} sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
  );
}
;

export default SearchInput;
