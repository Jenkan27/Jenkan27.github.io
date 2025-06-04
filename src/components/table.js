import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    course: 'Grundläggande programmering i Python',
    startDate: '2023-08-28',
    endDate: '2023-11-03',
  },
  {
    course: 'Databasteknik',
    startDate: '2023-11-06',
    endDate: '2023-12-15',
  },
  {
    course: 'Webbramverk',
    startDate: '2024-01-01',
    endDate: '2024-03-01',
  },
  {
    course: 'Maskininlärning, teori och praktisk tillämpning',
    startDate: '2024-03-04',
    endDate: '2024-04-05',
  },
  {
    course: 'Maskininlärning och deep learning',
    startDate: '2024-04-08',
    endDate: '2024-06-14',
  },
  {
    course: 'Effektiv Pythonprogrammering',
    startDate: '2024-08-19',
    endDate: '2024-09-27',
  },
  {
    course: 'Lärande i arbete 1',
    startDate: '2024-09-30',
    endDate: '2024-11-22',
  },
  {
    course: 'Applicerad AI',
    startDate: '2024-11-25',
    endDate: '2025-02-07',
  },
  {
    course: 'Lärande i arbete 2',
    startDate: '2025-02-10',
    endDate: '2025-05-02',
  },
  {
    course: 'Examensarbete',
    startDate: '2025-05-05',
    endDate: '2025-05-30',
  },
];

export default function CourseTable() {
  return (
    <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
      <Table size="small" aria-label="course table">
        <TableHead>
          <TableRow>
            <TableCell>KURS</TableCell>
            <TableCell>STARTDATUM</TableCell>
            <TableCell>SLUTDATUM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.course}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
