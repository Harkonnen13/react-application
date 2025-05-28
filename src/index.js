import './less/index.less';
import $ from 'jquery';

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/_comp-router/ScrollTotop/Index.js';
import PropsRoute from './components/_comp-router/PropsRoute/Index.js';

import AppHistory from './logic/data/AppHistory.js';
import AppStore from './logic/data/AppStore.js';
import ActionTypes from './logic/data/ActionTypes.js';

import LandingPage from './pages/LandingPage/Index.js';
import ProductsPage from './pages/ProductsPage/Index.js';
import CartPage from './pages/CartPage/Index.js';
import AboutPage from './pages/AboutPage/Index.js';

function onResize(e){
  AppStore.dispatch({ 
    type: ActionTypes.RESIZE,
    payload: { 
      innerHeight: e.currentTarget.innerHeight, 
      innerWidth: e.currentTarget.innerWidth 
    }
  });
}

function onScroll(e){
  if(e.target.scrollingElement)
    AppStore.dispatch({ 
      type: ActionTypes.SCROLL, 
      payload: e.target.scrollingElement.scrollTop
    });
}

function locationChanged(location){
  AppStore.dispatch({
    type: ActionTypes.LOCATION_CHANGED,
    payload: location
  });
}

AppHistory.listen(locationChanged);

$(document).ready(() => {
  const w =  $(window);
  w.resize(onResize);
  w.scroll(onScroll);
});

render((
<Provider store={AppStore}>
  <Router history={AppHistory}>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' 
               component={LandingPage}/>

        <PropsRoute path='/pizza/'
                    component={ProductsPage}
                    prodtype='pizza'/>

        <PropsRoute path='/pasta/'
                    component={ProductsPage}
                    prodtype='pasta'/>

        <PropsRoute path='/salad/'
                    component={ProductsPage}
                    prodtype='salad'/>
                    
        <PropsRoute path='/drinks/'
                    component={ProductsPage}
                    prodtype='drinks'/>

        <Route path='/cart/' 
               component={CartPage}/>

        <Route path='/about/' 
               component={AboutPage}/>
      </Switch>
    </ScrollToTop>
  </Router>
</Provider>
), document.getElementById('root'));
