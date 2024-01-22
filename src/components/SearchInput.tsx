import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
    id: string;
    label: string;
    query: string;
    setQuery: (target: any) => void;
}

const SearchInput = ({ id, label, query, setQuery }: SearchInputProps) => (
    <TextField 
        id={id}
        label={label}
        value={query}
        onInput={(e) => setQuery((e.target as HTMLTextAreaElement).value)} // gotta tell typescript which html element it is
        InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        endAdornment: <div onClick={() => setQuery('')}><InputAdornment position='end'>{query ? <CloseIcon /> : ''}</InputAdornment></div>
        }}
        size="small"
    />
)

export default SearchInput;