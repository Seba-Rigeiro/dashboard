import { useQuery } from '@tanstack/react-query';
import { CardTableProps } from '../components/card-table';

const fetchData = async (): Promise<CardTableProps[]> => {
  const response = await fetch('/api/table');
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
};

export const useData = () => {
  return useQuery<CardTableProps[]>({
    queryKey: ['table-data'],
    queryFn: fetchData,
  });
};
