import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Section from './Section';
import { 
  Stack, TextField, 
  Typography, Box, Avatar,
  Button
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

const Input = styled('input')({
  display: 'none',
});

const PersonalInfo = ({clientInfo, setClientInfo, isReadOnly}) => {

  const [imageProfile, setImageProfile] = useState('');

  const handlerInput = (e) => {
    if(e.target.files.length > 0){
      let reader = new FileReader();
      setClientInfo({...clientInfo, image: e.target.files[0]});
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () =>{
        setImageProfile(reader.result);
      };
    }
  };

  return (
    <Section title='Datos Personales' id='personalInfo'>
      <Box display='flex'>
        <Box display='flex' flexDirection='column' justifyContent='space-evenly' textAlign='center' alignItems='center'>
          <Avatar
            alt="Remy Sharp"
            src={imageProfile}
            sx={{ width: 145, height: 145 }}
          />
          <label htmlFor="contained-button-file">
            <Box marginBottom='20px'>
              <Input accept=".png, .jpeg, .jpg" id="contained-button-file" 
                multiple type="file"
                onChange={handlerInput}
              />
              <Button size='small' variant="contained" component="span" startIcon={<UploadIcon/>}>Subir</Button>
            </Box>
          </label>
          <Typography as='h2' fontSize='1.15rem'>ID {clientInfo.id}</Typography>
        </Box>
        <Stack spacing={6} paddingLeft='70px' width='100%'>
          <Stack direction='row' spacing={7} display='flex' justifyContent="center" alignItems='center'>
            <TextField
              variant="standard"
              label="Nombre"
              value={clientInfo.name}
              onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Apellido"
              value={clientInfo.lastName}
              onChange={(e) => setClientInfo({...clientInfo, lastName: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="DNI"
              value={clientInfo.DNI}
              onChange={(e) => setClientInfo({...clientInfo, DNI: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Telefono"
              value={clientInfo.tel}
              onChange={(e) => setClientInfo({...clientInfo, tel: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
          </Stack>
          <Stack direction='row' spacing={7}  justifyContent="center">
            <TextField
              variant="standard"
              label="Email"
              value={clientInfo.email}
              onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              id="date"
              variant="standard"
              label="Fecha de Nacimiento"
              type="date"
              value={clientInfo.birth}
              onChange={(e) => setClientInfo({...clientInfo, birth: e.target.value})}
              sx={{ width: 200 }}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
            <TextField
              variant="standard"
              label="Alta"
              value={clientInfo.alta ? 'Si' : 'No'}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              variant="standard"
              label="Plan Activo"
              value={clientInfo.plan}
              onChange={(e) => setClientInfo({...clientInfo, plan: e.target.value})}
              InputProps={{
                readOnly: isReadOnly,
              }}
            />
          </Stack>
          <Stack direction='row' spacing={7} justifyContent="flex-start">
            <TextField
              variant="standard"
              label="Fecha de Vigencia"
              type="date"
              value={clientInfo.validity}
              sx={{ width: 193 }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              variant="standard"
              label="Fecha de Proximo Pago"
              type="date"
              value={clientInfo.nextPay}
              sx={{ width: 200 }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              variant="standard"
              label="Estado"
              value={clientInfo.status}
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
