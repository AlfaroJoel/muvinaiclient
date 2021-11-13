import React, { useState } from 'react';
import { 
  Stack, Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

const OptionsMenu = ({clientInfoHandler, isReadOnly, setIsReadOnly, setClientInfo, clientInfo, setOpenCoupon}) => {
  const [openOptions, setOpenOptions] = useState(false);

  const handlerEdit = () => {
    setOpenOptions(false);
    setIsReadOnly(false);
  };
  const handlerSave = () => {
    setOpenOptions(false);
    clientInfoHandler();
  };

  const unsubscribeHanlder = () => {
    setOpenOptions(false);
    setClientInfo({...clientInfo, alta: false});

  };

  const subscribeHanlder = () => {
    setOpenOptions(false);
    setClientInfo({...clientInfo, alta: true});
  };

  const handlerCoupon = () => {
    setOpenOptions(false);
    setOpenCoupon(true);
  };

  return (
    <Box 
      sx={{
        position: 'fixed', bottom: '30px',
        right: '10px', zIndex:'9',
        display:'flex', justifyContent:'center',
        alignItems:'center', flexDirection:'column',
        width:'130px'
      }}
    >
      <Stack spacing={4} display={openOptions ? 'flex' : 'none'} marginBottom='20px'>
        <Button variant="contained" startIcon={<MailIcon/> } 
          color='secondary'
        >
          <Link underline='none' href={'mailto:' + clientInfo.email}
            color='#fff' target='_blank'
          >
              Mail
          </Link> 
        </Button>
        <Button variant="contained" startIcon={<WhatsAppIcon/> } 
          color='success'
        >
          <Link underline='none' href={'https://api.whatsapp.com/send?phone=' + clientInfo.tel}
            color='#fff' target='_blank'
          >
              Mensaje
          </Link> 
        </Button>
        <Button variant="contained" startIcon={<CloseIcon/> } 
          color='error' onClick={() => setOpenOptions(false)}
        >
            Invalidar
        </Button>
        {clientInfo.alta?
          <Button variant="contained" startIcon={<ArrowDownwardIcon/>} 
            color='error' onClick={unsubscribeHanlder}
          >
            Baja
          </Button> : <Button variant="contained" startIcon={<ArrowUpwardIcon/>} 
            color='primary' onClick={subscribeHanlder}
          >
            Alta
          </Button>}
        <Button variant="contained" startIcon={<AddIcon/>} 
          onClick={handlerCoupon}
        >
            Cupon
        </Button>
        {isReadOnly ? 
          <Button variant="contained" startIcon={<EditIcon/>} 
            onClick={handlerEdit} color='success'
          >
            Editar
          </Button> :
          <Button variant="contained" startIcon={<SaveIcon/>} 
            onClick={handlerSave} color='success'
          >
            Guardar
          </Button> 
        }
      </Stack>
      <Fab color="primary" onClick={() => setOpenOptions(!openOptions)}>
        {openOptions ? <CloseIcon/> : <AddIcon />}
      </Fab>
    </Box>
  );
};

export default OptionsMenu;
