import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


interface SearchInputProps {
    id: string;
    label: string;
}

const SearchInput = ({ id, label }: SearchInputProps) => (
    <TextField 
        id={id}
        label={label}
        InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
        size="small"
    />
)

export default SearchInput;