import React,{ useState }from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerClient from '../Components/DrawerClient/DrawerClient';
import PersonalInfo from '../Components/Sections/PersonalInfo';
import MedicalFit from '../Components/Sections/MedicalFit';
import { useDispatch } from 'react-redux';
import { clientActions } from '../Store/clientSlice';
import { useSelector } from 'react-redux';
import HistoryPays from '../Components/Sections/HistoryPays';
import HistoryEdits from '../Components/Sections/HistoryEdits';
import HistoryVenues from '../Components/Sections/HistoryVenues';
import HistoryCoupons from '../Components/Sections/HistoryCoupons';


const InfoClient = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const client = useSelector(state => state.client.item);
  const [clientInfo, setClientInfo] = useState(client);
  const dispatch = useDispatch();

  const clientInfoHandler = () => {
    setIsReadOnly(true);
    dispatch(clientActions.editClient(clientInfo));
  };

  return (
    <Box>
      <DrawerClient/>
      <Box padding='80px 20px 80px 70px'>

        <PersonalInfo isReadOnly={isReadOnly} clientInfo={clientInfo} setClientInfo={setClientInfo}/>
        <MedicalFit clientInfo={clientInfo} setClientInfo={setClientInfo} isReadOnly={isReadOnly}/>
        <HistoryPays />
        <Box display='flex' justifyContent='space-between'>
          <HistoryVenues />
          <HistoryCoupons />
        </Box>
        <HistoryEdits />
        <Box width='100%' textAlign='end'>
          {isReadOnly ? 
            <Button variant="outlined" onClick={()=> {setIsReadOnly(false);}}>Editar</Button> :
            <Button variant="outlined" onClick={clientInfoHandler}>Guardar</Button> 
          }
        </Box>
      </Box>
    </Box>
  );
};

export default InfoClient;
