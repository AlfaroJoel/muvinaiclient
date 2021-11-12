import React from 'react';
import Section from './Section';
import { Timeline } from '@mui/lab';
import { useSelector } from 'react-redux';
import TimeLinePay from '../TimeLinePay/TimeLinePay';


const HistoryPays = ({clientInfo}) => {
  const client = useSelector(state => state.client.item);

  return (
    <Section title='Historial de Pagos'>
      <Timeline sx={{maxHeight:'220px', overflow:'scroll',
        '::-webkit-scrollbar': {
          width: '.3em',
        },
        '::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey',
          borderRadius: '10px'
        } }}>
        {client.historyPays.map((item) => <TimeLinePay key={item.id} item={item}/>)}
      </Timeline>
    </Section>
  );
};

export default HistoryPays;
