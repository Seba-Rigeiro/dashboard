import { Box } from '@mui/material';
import { FC } from 'react';
import { Chart } from './chart';
import { ChartData } from '../entities/chart-data';
import ReusableTable from './common/table';

interface ChartSectionProps {
  selectedPeriod: string;
  ytdData: ChartData;
  ytgData: ChartData;
  chartData: ChartData;
}

export const ChartSection: FC<ChartSectionProps> = ({
  selectedPeriod,
  ytdData,
  ytgData,
  chartData,
}) => {
  return (
    <Box display="flex" gap={3} width="100%">
      {selectedPeriod === 'YTD / YTG' && ytdData && ytgData ? (
        <Box display="flex" gap={3} width="100%" height="450px">
          <Chart
            values={ytdData.values}
            labels={ytdData.labels}
            titles={ytdData.titles}
            colors={ytdData.colors}
          />
          <Chart
            values={ytgData.values}
            labels={ytgData.labels}
            titles={ytgData.titles}
            colors={ytgData.colors}
          />
        </Box>
      ) : (
        chartData && (
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            width="100%"
            height="100%"
          >
            <Box height={450}>
              <Chart
                values={chartData.values}
                labels={chartData.labels}
                titles={chartData.titles}
                colors={chartData.colors}
              />
            </Box>
            <Box maxWidth="500px">
              <ReusableTable data={chartData} />
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};
