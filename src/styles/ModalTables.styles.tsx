import styled from "@emotion/styled";
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