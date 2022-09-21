import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDrawer } from './StyleMui/StyledDrawer';
import MenuButton from './StyleMui/MenuButton';
import { NAV_ITEMS } from '../navItems';

const Drawer = () => {
  
  return (
    <StyledDrawer variant='permanent'>
      {NAV_ITEMS.map((item) =>{
          const { title, icon, path} = item;
          return (
            <Link  
              key={title} 
              to={`/${path}`}
             >
              <MenuButton>
                {icon}
              </MenuButton>
            </Link>
          )
        })}
    </StyledDrawer>
  )}   

  export default Drawer;
