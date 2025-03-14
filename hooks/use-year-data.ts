import { useQuery } from '@tanstack/react-query';
import { ChartData } from '../entities/chart-data';

const fetchYearData = async (): Promise<{
  ytdData: ChartData;
  ytgData: ChartData;
}> => {
  const response = await fetch('/api/year');
  if (!response.ok) {
    throw new Error('Error al obtener los datos');
  }
  return response.json();
};

export const useYearData = () => {
  const { data, isLoading, isError } = useQuery<{
    ytdData: ChartData;
    ytgData: ChartData;
  }>({
    queryKey: ['yearData'],
    queryFn: fetchYearData,
  });
  const { ytdData, ytgData } = data || {};

  return {
    ytdData: ytdData || { values: [], labels: [], titles: [], colors: [] },
    ytgData: ytgData || { values: [], labels: [], titles: [], colors: [] },
    isLoading,
    isError,
  };
};
