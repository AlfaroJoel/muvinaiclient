import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Section = ({title, children, minHeight, id}) => {
  return (
    <Box id={id} padding='40px 0'>
      <Box 
        boxShadow='0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%),
      0px 1px 3px 0px rgb(0 0 0 / 12%)'
        padding='30px 20px'
        borderRadius='8px'
        minHeight={minHeight}
      >
        <Typography textAlign='start' as='h1' fontSize='1.3rem' fontWeight='700'>{title}</Typography>
        <Box padding='20px 30px'>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
