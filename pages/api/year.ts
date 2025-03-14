import { NextApiRequest, NextApiResponse } from 'next';
import { ChartData } from '../../entities/chart-data';

const ytdData: ChartData = {
  values: [[1200], [1500]],
  labels: ['', ''],
  titles: ['2023', '2024'],
  colors: ['#EB3535', '#7A35EB'],
};

const ytgData: ChartData = {
  values: [[800], [1500]],
  labels: ['', ''],
  titles: ['2023', '2024'],
  colors: ['#EB3535', '#7A35EB'],
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ytdData, ytgData });
}
