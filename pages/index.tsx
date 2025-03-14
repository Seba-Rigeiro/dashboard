import type { NextPage } from 'next';
import { Filters } from '../components/filters';
import { Navbar } from '../components/navbar';
import { Box, CircularProgress } from '@mui/material';
import { useData } from '../hooks/useData';
import { useFilterState } from '../hooks/use-filter-state';
import { useYearData } from '../hooks/use-year-data';
import { ChartSection } from '../components/chart-section';
import { TableSection } from '../components/table-section';
import { ChartData } from '../entities/chart-data';

const Home: NextPage = () => {
  const { data, isLoading } = useData();
  const {
    selectedPeriod,
    setSelectedPeriod,
    selectedCategory,
    setSelectedCategory,
    showDays,
    chartData,
    isLoading: isChartLoading,
  } = useFilterState();
  const { ytdData, ytgData, isLoading: isLoadingYear } = useYearData();

  if (isLoading || isChartLoading || isLoadingYear) return <CircularProgress />;
  return (
    <Box display="flex">
      <Box position="static">
        <Navbar />
      </Box>
      <Box display="flex" paddingTop={10} gap={3} width="100%">
        <Box display="flex" flexDirection="column" gap={2} flexGrow={1}>
          <Filters
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showDays={showDays}
          />

          <ChartSection
            selectedPeriod={selectedPeriod}
            ytdData={ytdData}
            ytgData={ytgData}
            chartData={chartData ?? ({} as ChartData)}
          />
        </Box>
        <Box>
          <TableSection data={data ?? []} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
