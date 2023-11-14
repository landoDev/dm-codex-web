import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

interface RollTableRow {
    content: string[];
}

interface RollTableProps {
    tablename: string;
    headers: string[];
    rows: RollTableRow[]
}



/**
 * RollTable serves to render the dm tables like `Setting A DC` and random encounter tables.
 * Takes the headers as names and row objects and assumes they are ordered as desired
 * 
 */
const RollTable = ({tablename, headers, rows}: RollTableProps) => {
    // theres gotta be a good way to yse a hashmap
    return (
        <TableContainer>
            <h2>{tablename}</h2>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <StyledTableCell>{header}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(({content}) => (
                    <StyledTableRow>
                        {content.map((label) => (
                            <StyledTableCell align="right">{label}</StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
                
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RollTable;