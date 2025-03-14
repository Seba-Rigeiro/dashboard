import { BarChart } from '@mui/x-charts';
import { FC } from 'react';
import { ChartData } from '../entities/chart-data';

export const Chart: FC<ChartData> = ({
  values = [],
  labels = [],
  titles = [],
  colors = [],
}) => {
  const series = values.map((dataset, index) => ({
    data: dataset,
    label: titles[index] || `Serie ${index + 1}`,
    color: colors[index] || '#1976d2',
  }));

  return (
    <BarChart
      grid={{ horizontal: true }}
      series={series}
      xAxis={[{ scaleType: 'band', data: labels }]}
    />
  );
};
