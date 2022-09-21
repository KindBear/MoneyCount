import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import HomeIcon from '@mui/icons-material/Home';

export const NAV_ITEMS = [
    {
    title: 'MainPage',
    icon: <HomeIcon />,
    path: 'MainPage'
  },
    {
    title: 'TransactionsPage',
    icon: <ViewListSharpIcon />,
    path: 'TransactionsPage'
    
  },
    {
    title: 'SettingsPage',
    icon: <SettingsIcon />,
    path: 'SettingsPage'
  }
  ]
  