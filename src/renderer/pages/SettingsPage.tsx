import React from 'react';
import Box from '@mui/material/Box';
import Tabs  from '@mui/material/Tabs';
import { StyledTab } from '../components/StyleMui/StyledTab';

const SettingsTabs = () => {
 
  return (
    <Box sx={{
      width: '1856px',
      height: '48px',
      paddingLeft: '8px',
    }}>
      <Tabs>
        <StyledTab label='General'/>
        <StyledTab label='Categories' />
      </Tabs>
    </Box>
  );
};

export default SettingsTabs;
