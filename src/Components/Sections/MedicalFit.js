import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Section from './Section';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});


const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'60%',
  height:'100%',
  border: 'none',
  boxShadow: 24,
};

const MedicalFit = ({clientInfo, setClientInfo, isReadOnly}) => {
  const [medicalFitPreview, setMedicalFitPreview] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);

  const handlerInput = (e) => {
    if(e.target.files.length > 0){
      let reader = new FileReader();
      setClientInfo({...clientInfo, medicalFit: e.target.files[0]});
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () =>{
        setMedicalFitPreview(reader.result);
      };
    }
  };

  return (
    <Section title='Apto Medico'>
      <Box display='flex' alignItems='center' width='100%'>
        <label htmlFor="contained-button-file">
          <Box sx={{marginRight:'20px'}}>
            <Input accept=".pdf, .jpeg, .jpg" id="contained-button-file" 
              multiple type="file"
              onChange={handlerInput}
            />
            <Button variant="contained" component="span" startIcon={<UploadIcon/>} >
              {clientInfo.medicalFit ? 'Actualizar Apto Medico' : 'Subir Apto Medico'}
            </Button>
          </Box>
        </label>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <iframe src={medicalFitPreview} width="100%" height="100%" />
          </Box>
        </Modal>
        {
          clientInfo.medicalFit ? (
            <Stack spacing={4} alignItems='center' justifyContent='center' direction='row'>
              {
                clientInfo.checkMedicalFit ? 
                  <Typography color='green'>Apto medico aprobado</Typography> : 
                  (
                    <Stack spacing={4} direction='row' alignItems='center'>
                      <Typography color='red'>Apto medico no aprobado</Typography>
                      <Button 
                        onClick={()=> setClientInfo({...clientInfo, checkMedicalFit: true})}
                        variant='outlined'
                        color="success"
                      >Aprobar Apto Medico</Button>
                    </Stack>
                  )
              }
              
              <Button onClick={()=> setOpenModal(true)} variant='outlined'>Ver Apto Medico</Button>
              <TextField
                id="date"
                variant="standard"
                label="Fecha de Vencimiento"
                type="date"
                value={clientInfo.dateExpiry}
                onChange={(e) => setClientInfo({...clientInfo, dateExpiry: e.target.value})}
                InputProps={{
                  readOnly: isReadOnly,
                }}
              />
            </Stack>
          ):
            <Typography color='red' >No se encontro ningun apto medico para este socio</Typography>
        }
      </Box>
    </Section>
  );
};

export default MedicalFit;
