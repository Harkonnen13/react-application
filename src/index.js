import './less/index.less';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollTotop';

import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';

render((
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' 
                component={() => <LandingPage/>}/>
                <Route path='/pizza/' 
                       component={() => <ProductsPage title='Пицца'                                            href='/store?type=pizza'/>}/>
                <Route path='/pasta/' 
                       component={() => <ProductsPage title='Паста' 
                                                      href='/store?type=pasta'/>}/>
                <Route path='/drinks/' 
                       component={() => <ProductsPage title='Напитки' 
                                                      href='/store?type=drinks'/>}/>
                <Route path='/salad/' 
                       component={() => <ProductsPage title='Салаты' 
                                                      href='/store?type=salad'/>}/>
                <Route path='/about/' 
                component={() => <AboutPage/>}/>
                <Route path='/cart/' 
                component={() => <CartPage/>}/>
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'));
