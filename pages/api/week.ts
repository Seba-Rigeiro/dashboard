import { NextApiRequest, NextApiResponse } from 'next';
import { ChartData } from '../../entities/chart-data';

const weekData: ChartData = {
  values: [
    [38, 38, 46, 27, 37, 21, 2],
    [30, 16, 28, 4, 18, 23, 30],
  ],
  labels: [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ],
  titles: ['Clientes Nuevos', 'Compraron'],
  colors: ['#1976d2', '#ff5722'],
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(weekData);
}
