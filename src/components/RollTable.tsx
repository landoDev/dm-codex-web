import { styled } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: '12px',
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

interface RollTableProps {
    tablename?: string;
    // this should be a list of objects and each object is a dynamic obj of a row
    rows: { [key: string]: string }[];
    maxWidth?: string;
    fontSize?: string;
}



/**
 * RollTable serves to render the dm tables like `Setting A DC` and random encounter tables.
 * Takes row objects and assumes they are ordered as desired. 
 * **BE SURE** that you are passing an array of objects where the keys are the headers and values are each corresponding row value
 * 
 */
const RollTable = ({tablename, rows, maxWidth = '500px', fontSize }: RollTableProps) => {

    const headers = Object.keys(rows[0]).map(key => key.toUpperCase())
    
    return (
        // going to pass style to this for now but will customize with props later 
        // when you do that make sure you also allow the component to take relevant style props when I call it 
        <TableContainer style={{maxWidth: maxWidth }}>
            <h2>{tablename}</h2>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <StyledTableCell>{header}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow>
                    {Object.values(row).map(item => (
                        <StyledTableCell style={{ fontSize: fontSize }}>{item}</StyledTableCell>
                    ))}
                    </StyledTableRow>
                ))}
    
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RollTable;