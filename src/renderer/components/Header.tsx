import React from 'react';
import { Typography } from '@mui/material';
import { AppHeader } from './StyleMui/AppHeader';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../navItems';

const Header = () => {

  const location = useLocation();

  
 return (
      <AppHeader>
    <Typography variant='h3'>
   {NAV_ITEMS.find((element) => location.pathname === element.path).title}
  </Typography>
</AppHeader>
)};

export default Header;