import './Styles.less';
import $con from '../../../constants';

import React from 'react';
import { Link } from 'react-router-dom';
import List from '../../List';

const MenuPanel = ({screen, show}) => {
  return(
    <div className='menuPanel'>
      {
        screen >= $con.screenSize.md &&
        <span className='menuPanel-phone menu-phone'>
          8 (800) 960-01-01
        </span>
      }
      { 
        !show &&
          <List itemModificator='menuPanel-link'>
            <Link className='link' to='/pizza/'>Пицца</Link>
            <Link className='link' to='/pasta/'>Паста</Link>
            <Link className='link' to='/salad/'>Салаты</Link>
            <Link className='link' to='/drinks/'>Напитки</Link>
          </List>
      }
    </div> 
  )
};

export default MenuPanel;