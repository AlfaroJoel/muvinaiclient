import React,{ useState }from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerClient from '../Components/DrawerClient/DrawerClient';
import PersonalInfo from '../Components/Sections/PersonalInfo';
import MedicalFit from '../Components/Sections/MedicalFit';

const InfoClient = ({client}) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <Box>
      <DrawerClient/>
      <Box padding='80px 20px 80px 70px'>
        <PersonalInfo client={client} isReadOnly={isReadOnly}/>
        <MedicalFit client={client}/>
        <Box width='100%' textAlign='end'>
          {isReadOnly ? 
            <Button variant="outlined" onClick={()=> {setIsReadOnly(false);}}>Editar</Button> :
            <Button variant="outlined" onClick={()=> {setIsReadOnly(true);}}>Guardar</Button> 
          }
        </Box>
      </Box>
    </Box>
  );
};

export default InfoClient;
