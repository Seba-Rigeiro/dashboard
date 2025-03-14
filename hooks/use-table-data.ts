import { useQuery } from '@tanstack/react-query';
import { ChartData } from '../entities/chart-data';

const fetchData = async (): Promise<ChartData> => {
  const response = await fetch('/api/day');
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
};

export const useTableData = () => {
  return useQuery<ChartData>({
    queryKey: ['day-data'],
    queryFn: fetchData,
  });
};
