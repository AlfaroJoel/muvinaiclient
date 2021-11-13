import React, { useState } from 'react';
import { 
  Stack, TextField, Box, Button
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { clientActions } from '../../Store/clientSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddCoupon = ({open, setOpenCoupon}) => {
  const handleClose = () => setOpenCoupon(false);
  const client = useSelector(state => state.client.item);
  const [coupon, setCoupon] = useState({name: '', from: '2021-10-23', to: '2021-10-23', discount: ''});
  const couponsClient = client.coupons;
  const dispatch = useDispatch();

  const handlerAddCoupon = () => {
    setOpenCoupon(false);
    dispatch(clientActions.editClient({...client, coupons: [...couponsClient, coupon]}));
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Cupon
          </Typography>
          <Stack spacing={3}>
            <Stack direction='row' spacing={7}>
              <TextField
                variant="standard"
                label="Nombre del Cupon"
                value={coupon.name}
                onChange={(e) => setCoupon({...coupon, name: e.target.value})}
              />
              <TextField
                type='number'
                variant="standard"
                label="% Descuento"
                value={coupon.discount}
                onChange={(e) => setCoupon({...coupon, discount: e.target.value})}
              />
            </Stack>
            <Stack direction='row' spacing={7}>
              <TextField
                variant="standard"
                label="Desde"
                type="date"
                value={coupon.from}
                onChange={(e) => setCoupon({...coupon, from: e.target.value})}
                sx={{ width: 200 }}
              />
              <TextField
                variant="standard"
                label="Hasta"
                type="date"
                value={coupon.to}
                onChange={(e) => setCoupon({...coupon, to: e.target.value})}
                sx={{ width: 200 }}
              />
            </Stack>
          </Stack>
          <Box width='100%' display='flex' justifyContent='end' marginTop='25px'>
            <Button variant='outlined' onClick={handlerAddCoupon}>Agregar Cupon</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddCoupon;
