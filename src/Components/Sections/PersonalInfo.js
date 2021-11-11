import React, {useState} from 'react';
import Section from './Section';
import { 
  Stack, TextField, 
  Typography, Box, Avatar,
  
} from '@mui/material';

const PersonalInfo = ({client, isReadOnly}) => {
  const {name, lastName, plan, DNI, tel, alta, email, birth} = client;
  const [valueInfo, setValueInfo] = useState(client);

  return (
    <Section title='Datos Personales'>
      <Box display='flex'>
        <Box display='flex' flexDirection='column' justifyContent='space-evenly' textAlign='center'>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 145, height: 145 }}
          />
          <Typography as='h2' fontSize='1.15rem'>ID {client.id}</Typography>
        </Box>
        <Stack spacing={5} paddingLeft='70px' >
          <Stack direction='row' justifyContent="space-evenly" spacing={7}>
            <TextField
              variant="standard"
              label="Nombre"
              value={valueInfo.name}
              onChange={(e) => setValueInfo({...valueInfo, name: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Apellido"
              value={valueInfo.lastName}
              onChange={(e) => setValueInfo({...valueInfo, lastName: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="DNI"
              value={valueInfo.DNI}
              onChange={(e) => setValueInfo({...valueInfo, DNI: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Telefono"
              value={valueInfo.tel}
              onChange={(e) => setValueInfo({...valueInfo, tel: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
          </Stack>
          <Stack direction='row' spacing={7}  justifyContent="space-evenly">
            <TextField
              variant="standard"
              label="Email"
              value={valueInfo.email}
              onChange={(e) => setValueInfo({...valueInfo, email: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              id="date"
              variant="standard"
              label="Fecha de Nacimiento"
              type="date"
              value={valueInfo.birth}
              onChange={(e) => setValueInfo({...valueInfo, birth: e.target.value})}
              sx={{ width: 200 }}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Alta"
              value={valueInfo.alta}
              onChange={(e) => setValueInfo({...valueInfo, alta: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Plan Activo"
              value={valueInfo.plan}
              onChange={(e) => setValueInfo({...valueInfo, plan: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
          </Stack>
          <Stack direction='row' spacing={7}>
            <TextField
              variant="standard"
              label="Fecha de Vigencia"
              type="date"
              value={valueInfo.validity}
              sx={{ width: 200 }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              variant="standard"
              label="Fecha de Proximo Pago"
              type="date"
              value={valueInfo.nextPay}
              sx={{ width: 200 }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              variant="standard"
              label="Estado"
              value={valueInfo.status}
              InputProps={{
                readOnly: true,
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Section>
  );
};

export default PersonalInfo;
