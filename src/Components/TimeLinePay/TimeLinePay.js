import React, { useState } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PaymentIcon from '@mui/icons-material/Payment';
import Typography from '@mui/material/Typography';
import { TextField, Stack, IconButton  }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TimeLinePay = ({item}) => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <Box display='flex'>
      <TimelineItem sx={{width:'25%', marginRight:'40px'}}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {item.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={item.completed ? {border:'2px solid green'} : {border:'2px solid red'}}>
            <PaymentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} >
          <Box display='flex' flexDirection='column'>
            {item.completed ? 
              <Typography variant="h7" component="span" color='green'>Completada</Typography> :
              <Typography variant="h7" component="span" color='red'>Rechazada</Typography>
            }
            <Typography width='80px' component="span" fontSize='1rem'
              color="text.secondary" 
              sx={{cursor:'pointer'}}
              onClick={() => {setOpenInfo(true);}}
            >
                  ver mas
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <Stack
        spacing={1}
        display={openInfo ? 'flex': 'none'}
        direction='row' alignItems='center'
      >
        <TextField
          variant="standard"
          label="Id de Transaccion"
          value={item.id}
          size='small'
          sx={{width:'100px', caretColor:'transparent'}}
          readOnly
        />
        <TextField
          variant="standard"
          label="Monto"
          value={'$' + item.amount}
          sx={{width:'100px', caretColor:'transparent'}}
          size='small'
          readOnly
        />
        <TextField
          variant="standard"
          label="Tarjeta"
          value={ item.brand}
          sx={{width:'100px', caretColor:'transparent'}}
          size='small'
          readOnly
        />
        <TextField
          variant="standard"
          label="N° de Tarjeta"
          value={ item.card}
          sx={{width:'100px', caretColor:'transparent'}}
          size='small'
          readOnly
        />
        <IconButton onClick={()=> {setOpenInfo(false);}}><CloseIcon/></IconButton>
      </Stack>
    </Box>
  );
};

export default TimeLinePay;
