import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


interface SearchInputProps {
    id: string;
    label: string;
    setQuery: (target: any) => void;
}

const SearchInput = ({ id, label, setQuery }: SearchInputProps) => (
    <TextField 
        id={id}
        label={label}
        onInput={(e) => setQuery((e.target as HTMLTextAreaElement).value)} // gotta tell typescript which html element it is
        InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
        size="small"
    />
)

export default SearchInput;