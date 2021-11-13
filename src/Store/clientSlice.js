import { createSlice } from '@reduxjs/toolkit';

const client = {
  id: '1374',
  name: 'Joel',
  lastName: 'Alfaro',
  plan: 'Simple',
  DNI: '41287058',
  tel: '221485733',
  alta: true,
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
    {id: '345', amount: '1040', card: '3004', brand: 'Mastercard', date: '2021-10-23', completed: true},
    {id: '346', amount: '3200', card: '5603', brand: 'Visa', date: '2021-9-16', completed: false},
    {id: '347', amount: '3523', card: '5603', brand: 'Maestro', date: '2021-9-13', completed: false},
    {id: '348', amount: '6532', card: '5603', brand: 'Visa', date: '2021-10-16', completed: true},
  ],
  historyEdit: [
    {id: '1', user: 'Recepcionista', name: 'Ornella', action: 'modifico validez del apto medico', from: 'Apto medico no valido', to: 'Apto medico valido'},
    {id: '2', user: 'Gerente', name: 'Javier', action: 'modifico categoria Plan', from: 'Plan Full', to: 'Plan Simple'},
    {id: '3', user: 'Gerente', name: 'Javier', action: 'modifico categoria Telefono', from: '2284478966', to: '221485733'},
    {id: '4', user: 'Recepcionista', name: 'Milagros', action: 'modifico categoria Alta', from: 'No', to: 'Si'},
    {id: '5', user: 'Gerente', name: 'Javier', action: 'modifico categoria Telefono', from: '2284478966', to: '221485733'},
    {id: '6', user: 'Recepcionista', name: 'Carlos', action: 'modifico categoria Email', from: 'joelalfaro@gmail.com', to: 'alfarojoelf@gmail.com'},
    {id: '7', user: 'Gerente', name: 'Javier', action: 'modifico categoria Telefono', from: '2284478966', to: '221485733'},
    {id: '8', user: 'Recepcionista', name: 'Carlos', action: 'modifico categoria Email', from: 'joelalfaro@gmail.com', to: 'alfarojoelf@gmail.com'},
  ],
  pastAssociations: [
    {from: '2020-01-03', to: '2020-03-02'},
    {from: '2020-04-10', to: '2020-07-11'},
    {from: '2020-11-14', to: '2021-03-16'},
    {from: '2021-06-23', to: 'Presente'},
  ],
  coupons: [
    {name: 'OSDE', from: '2021-10-23', to: '2021-11-23', discount: '20'},
    {name: 'Aniversario', from: '2021-08-15', to: '2021-09-15', discount: '35'},
    {name: 'Familiar', from: '2021-03-10', to: '2021-04-10', discount: '15'},
    {name: 'Referido', from: '2021-01-08', to: '2021-02-08', discount: '10'}
  ],
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