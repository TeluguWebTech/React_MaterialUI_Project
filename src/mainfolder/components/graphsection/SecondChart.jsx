import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SecondChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
   
      sx={{ width: {xs:400, sm:600, md:500 } }}
      height={300}
    />
  );
}
