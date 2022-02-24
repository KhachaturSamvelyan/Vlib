import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function SearchInput() {
  return (
    <Paper
      component="form"
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
        />
        <IconButton  sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
  );
}
;

export default SearchInput;
