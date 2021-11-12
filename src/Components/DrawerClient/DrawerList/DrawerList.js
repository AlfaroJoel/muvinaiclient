import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HistoryIcon from '@mui/icons-material/History';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PaymentsIcon from '@mui/icons-material/Payments';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { RiCoupon5Line } from 'react-icons/ri';
import MapIcon from '@mui/icons-material/Map';
import Link from '@mui/material/Link';
import List from '@mui/material/List';

const DrawerList = ({handleDrawerClose}) => {
  return (
    <List>
      <ListItem button onClick={handleDrawerClose}>
        <Link underline='none' href='#personalInfo'
          color='#000' aria-current="page" sx={{width:'100%', display:'flex', alignItems:'center'}}>
          <ListItemIcon>
            <PermIdentityIcon/>
          </ListItemIcon>
          <ListItemText primary="Datos Personales" />
        </Link>
      </ListItem>
      <Accordion 
        sx={{'&:before': {display: 'none'}}} //boxShadow:'none',
        disableGutters
      >
        <AccordionSummary as={ListItem} button 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon>
            <HistoryIcon/>
          </ListItemIcon>
          <ListItemText primary="Historiales" />
        </AccordionSummary>
        <AccordionDetails sx={{padding: '0'}}>
          <ListItem button onClick={handleDrawerClose}>
            <Link underline='none' href='#historyPays'
              color='#000' aria-current="page" sx={{width:'100%', display:'flex', alignItems:'center'}}>
              <ListItemIcon>
                <PaymentsIcon/>
              </ListItemIcon>
              <ListItemText primary="Pagos" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link underline='none' href='#historyAssociation'
              color='#000' aria-current="page" sx={{width:'100%', display:'flex', alignItems:'center'}}>
              <ListItemIcon>
                <ContentPasteIcon/>
              </ListItemIcon>
              <ListItemText primary="Asociaciones" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link underline='none' href='#historyVenues'
              color='#000' aria-current="page" sx={{width:'100%', display:'flex', alignItems:'center'}}>
              <ListItemIcon>
                <MapIcon/>
              </ListItemIcon>
              <ListItemText primary="Sedes Anteriores" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link underline='none' href='#historyCoupons'
              color='#000' aria-current="page" sx={{width:'100%', display:'flex', alignItems:'center'}}>
              <ListItemIcon>
                <RiCoupon5Line fontSize='24px'/>
              </ListItemIcon>
              <ListItemText primary="Cupones" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose} diplsay='flex'>
            <Link underline='none' href='#historyEdit'
              color='#000' aria-current="page" sx={{width:'100%', display:'flex', alignItems:'center'}}>
              <ListItemIcon>
                <EditIcon/>
              </ListItemIcon>
              <ListItemText primary='Edicion'/>
            </Link>
          </ListItem>
        </AccordionDetails>
      </Accordion>
    </List>
  );
};

export default DrawerList;
