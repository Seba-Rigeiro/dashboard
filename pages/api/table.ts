import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    month: 'Octubre',
    clients: 100,
    total: 5000,
    sales: 300,
    accumulated: 1000,
    days: [
      { date: '1/10', value: 55 },
      { date: '5/10', value: 250 },
      { date: '15/10', value: 147 },
    ],
  },
  {
    month: 'Septiembre',
    clients: 120,
    total: 6000,
    sales: 350,
    accumulated: 900,
    days: [
      { date: '2/9', value: 75 },
      { date: '10/9', value: 190 },
      { date: '20/9', value: 220 },
    ],
  },
  {
    month: 'Agosto',
    clients: 90,
    total: 4500,
    sales: 280,
    accumulated: 800,
    days: [
      { date: '3/8', value: 65 },
      { date: '12/8', value: 180 },
      { date: '25/8', value: 135 },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
