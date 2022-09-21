import React from 'react';
import {StyledTypography} from './StyleMui/StyledTypography';
import { AppHeader } from './StyleMui/AppHeader';

const Header = () => {
  return (
      <AppHeader>
        <StyledTypography>
          General Info
        </StyledTypography>
      </AppHeader>
    );
};

export default Header;
