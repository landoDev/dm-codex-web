import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export const ModalTablesContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '3%',
    marginBottom: '3%',
    "div:hover": {
        textDecoration: 'underline',
        color: 'red'
    }
}));

// TODO: I need a better variable name for this
export const InfoTable = styled('div')`
    cursor: pointer;
`;

export const ModalContentContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 950,
    padding: '1%',
    backgroundColor: 'red',
    border: '2px solid #000',
    boxShadow: '24',
    margin: '0 auto',
    marginTop: '1%',
    marginBottom: '1%',
    maxHeight: '98%',
    overflowY: 'auto'
}))