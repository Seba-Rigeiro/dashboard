import {
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from '@mui/material';
import { FC } from 'react';

interface Day {
  date: string;
  value: number;
}

export interface CardTableProps {
  month: string;
  clients: number;
  total: number;
  sales: number;
  accumulated: number;
  days: Day[];
}

const StyledTableCell = styled(TableCell)({
  borderBottom: 'none',
});

export const CardTable: FC<CardTableProps> = ({
  month,
  clients,
  total,
  sales,
  accumulated,
  days,
}) => {
  return (
    <Card>
      <CardHeader subheader={month} align="center" />
      <CardContent>
        <TableContainer>
          <Table size="small" sx={{ minWidth: 300 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell>Clientes</StyledTableCell>
                <StyledTableCell align="right">{clients}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Ventas</StyledTableCell>
                <StyledTableCell align="right">{sales}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Monto Total</StyledTableCell>
                <StyledTableCell align="right">${total}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell colSpan={2} size="medium">
                  Cashback
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Acumulado</StyledTableCell>
                <StyledTableCell align="right">${accumulated}</StyledTableCell>
              </TableRow>
              {days.map((day) => (
                <TableRow key={day.date}>
                  <StyledTableCell>Facturado {day.date}</StyledTableCell>
                  <StyledTableCell align="right">${day.value}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
