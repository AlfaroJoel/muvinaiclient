import React,{ useState }from 'react';
import Box from '@mui/material/Box';
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
import HistoryAssociations from '../Components/Sections/HistoryAssociations';
import OptionsMenu from '../Components/OptionsMenu/OptionsMenu';
import AddCoupon from '../Components/AddCoupon/AddCoupon';

const InfoClient = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const client = useSelector(state => state.client.item);
  const [clientInfo, setClientInfo] = useState(client);
  const [openCoupon, setOpenCoupon] = useState(false);
  const dispatch = useDispatch();

  const clientInfoHandler = () => {
    setIsReadOnly(true);
    dispatch(clientActions.editClient(clientInfo));
  };

  return (
    <Box>
      <DrawerClient/>
      <Box padding='10px 20px 80px 70px' marginTop='30px'>
        <PersonalInfo isReadOnly={isReadOnly} clientInfo={clientInfo} setClientInfo={setClientInfo}/>
        <MedicalFit clientInfo={clientInfo} setClientInfo={setClientInfo} isReadOnly={isReadOnly}/>
        <Box display='flex' justifyContent='space-between'>
          <HistoryPays />
          <HistoryAssociations />
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <HistoryVenues />
          <HistoryCoupons />
        </Box>
        <HistoryEdits />
        <AddCoupon open={openCoupon} setOpenCoupon={setOpenCoupon}/>
        <OptionsMenu isReadOnly={isReadOnly} 
          setIsReadOnly={setIsReadOnly} 
          clientInfoHandler={clientInfoHandler}
          setClientInfo={setClientInfo}
          clientInfo={clientInfo}
          setOpenCoupon={setOpenCoupon}
        />
      </Box>
    </Box>
  );
};

export default InfoClient;
