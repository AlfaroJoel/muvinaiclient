import React from 'react';
import Section from './Section';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

const HistoryAssociations = () => {
  const client = useSelector(state => state.client.item);
  const rows = client.pastAssociations;

  return (
    <Box width='28%'>
      <Section title='Associaciones Pasadas' id='historyAssociation'>
        <TableContainer component={Paper}
          sx={{
            maxHeight:'220px', 
            '::-webkit-scrollbar': {
              width: '.3em',
            },
            '::-webkit-scrollbar-track': {
              '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.1)',
              borderRadius: '10px'
            }
          }} overflow='scroll'>
          <Table aria-label="sticky table" stickyHeader >
            <TableHead>
              <TableRow>
                <TableCell>Desde</TableCell>
                <TableCell>Hasta</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.from}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.from}
                  </TableCell>
                  <TableCell >{row.to}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </Box>
  );
};

export default HistoryAssociations;
