import './less/index.less';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './helpers/MediaSelector';
import './helpers/ScrollWatcher';

import ScrollToTop from './components/ScrollTotop';

import AboutContainer from './logic/containers/AboutContainer';
import LandingPageContainer from './logic/containers/LandingPageContainer';
import ProductsContainer from './logic/containers/ProductsContainer';
import CartContainer from './logic/containers/CartContainer';

render((
<BrowserRouter>
  <ScrollToTop>
    <Switch>
      <Route exact path='/' 
             component={() => <LandingPageContainer/>}/>
             
      <Route path='/pizza/' 
             component={() => <ProductsContainer title='Пицца'
                                                 href='/store?type=pizza'/>}/>

      <Route path='/pasta/' 
             component={() => <ProductsContainer title='Паста'
                                                 href='/store?type=pasta'/>}/>

      <Route path='/drinks/' 
             component={() => <ProductsContainer title='Напитки'
                                                 href='/store?type=drinks'/>}/>

      <Route path='/salad/' 
             component={() => <ProductsContainer title='Салаты'
                                                 href='/store?type=salad'/>}/>
                                                 
      <Route path='/about/' 
             component={() => <AboutContainer/>}/>

      <Route path='/cart/' 
             component={() => <CartContainer/>}/>
    </Switch>
  </ScrollToTop>
</BrowserRouter>
), document.getElementById('root'));
