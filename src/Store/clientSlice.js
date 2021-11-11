import { createSlice } from '@reduxjs/toolkit';

const client = {
  id: '1374',
  name: 'Joel',
  lastName: 'Alfaro',
  plan: 'Simple',
  DNI: '41287058',
  tel: '221485733',
  alta: 'Si',
  email: 'alfarojoelf@gmail.com',
  birth: '1998-10-23',
  validity: '2021-12-24',
  nextPay: '2022-01-24',
  status: 'Soltero',
  image: '',
  medicalFit: null,
  checkMedicalFit: false,
  dateExpiry: '2022-01-23',
  historyPays: [
    {amount: '1000', card: '3004', brand: 'mastercard', date: '', status: 'complete'},
    {amount: '3000', card: '5603', brand: 'visa', date: '', status: 'failed'}
  ],
  historyEdit: [
    {user: 'Recepcionista', name: 'Ornella', action: 'modifico validez del apto medico', from: '', to: ''}
  ],
  pastAssociations: [{from: '', to: ''}],
  coupons: [{name: 'OSDE', from: '', to: '', discount: '20%'}],
  historyVenues: [
    {quantity: 4, venue: 'Belgrano'},
    {quantity: 7, venue: 'Coghlan'},
    {quantity: 5, venue: 'Microcentro'},
  ]
}; 

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    item: client,
  },
  reducers: {
    editClient(state, action) {
      const newClient = action.payload;
      state.item = newClient;
    }
  }
});

export const clientActions = clientSlice.actions;

export default clientSlice;