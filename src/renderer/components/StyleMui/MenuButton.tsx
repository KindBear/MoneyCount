import React from 'react';
import { styled} from '@mui/material/styles';
import { IconButton } from '@mui/material';

const MenuButton = styled(IconButton)({
    width: '48px',
    height: '48px',
    borderRadius: '15px',
    background:  'rgba(0, 0, 0, 0.3)',
    left: '8px',
    marginBottom: '14px',
  
    '&:hover': {
      cursor: 'pointer'
    },
  
    '&:active': {
      backgroundColor: '#00A390',
      },

    '&:focus': {
      boxShadow: 'none',
      background: '#00A390'
    },
    
    '& .MuiSvgIcon-root': {
      color: '#DEDEDE',
      fontSize: '30px'
    }
  });

  export default MenuButton;
