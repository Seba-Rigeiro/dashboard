import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { ChartData } from '../../entities/chart-data';

const ReusableTable = ({ data }: { data: ChartData }) => {
  if (!data || !data.values || !data.labels || !data.titles) {
    return <p>No data available</p>;
  }

  const generateRandomValue = () => Math.floor(Math.random() * 100);

  const processedData = data.labels.map((label, rowIndex) => {
    const rowValues = data.values.map((col) => col[rowIndex] || 0);
    const column3 = generateRandomValue();
    const lastColumn = rowValues[rowValues.length - 1] || 0;
    const column4 = column3 + lastColumn;
    return { label, values: [...rowValues, column3, column4] };
  });

  const columns = [...data.titles, 'Column 3', 'Total'];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Semana</TableCell>
            {columns.map((col, index) => (
              <TableCell key={index} align="right">
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {processedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{row.label}</TableCell>
              {row.values.map((value, colIndex) => (
                <TableCell key={colIndex} align="right">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
