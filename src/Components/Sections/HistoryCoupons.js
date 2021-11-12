import React from 'react';
import Section from './Section';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

const HistoryCoupons = () => {
  const client = useSelector(state => state.client.item);
  const coupons = client.coupons.map(item => item.name);
  const discount = client.coupons.map(item => item.discount);
  const data = {
    labels: coupons,
    datasets: [
      {
        label: '# of Coupons',
        data: discount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box width='49%'>
      <Section title='Cupones Usados'>
        <Pie data={data} />
      </Section>
    </Box>
  );
};

export default HistoryCoupons;
