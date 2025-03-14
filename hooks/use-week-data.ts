import { useQuery } from '@tanstack/react-query';
import { ChartData } from '../entities/chart-data';

const fetchData = async (): Promise<ChartData> => {
  const response = await fetch('/api/week');
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
};

export const useWeekData = () => {
  return useQuery<ChartData>({
    queryKey: ['week-data'],
    queryFn: fetchData,
  });
};
