import { NextApiRequest, NextApiResponse } from 'next';
import { ChartData } from '../../entities/chart-data';

const dayData: ChartData = {
  values: [
    [
      4, 41, 5, 22, 39, 36, 18, 41, 17, 44, 23, 47, 19, 25, 20, 27, 38, 22, 13,
      19, 0, 23, 22, 31,
    ],
    [
      28, 34, 3, 49, 18, 38, 8, 25, 4, 32, 24, 1, 47, 4, 38, 42, 13, 3, 7, 5,
      43, 49, 23, 6,
    ],
  ],
  labels: [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ],
  titles: ['Clientes Nuevos', 'Compraron'],
  colors: ['#EB7635', '#358DEB'],
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(dayData);
}
