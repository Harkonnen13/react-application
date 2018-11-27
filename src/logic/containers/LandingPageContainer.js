import React, { Component } from 'react';
import {Container} from 'flux/utils';

import AppStore from '../data/stores/AppStore';
import LandingPage from '../../pages/LandingPage';

class LandingPageContainer extends Component{
  
  static getStores() {
    return [
      AppStore,
    ];
  }
   
  static calculateState() {
    let aState = AppStore.getState(),
        state = {
            scrolled: aState.get('scrolled'),
            screen: aState.get('screen'),
            size: aState.get('size')
        };
    return state;
  }

  render() {
    return (
      <LandingPage {...this.state}></LandingPage>
    );
  }
}
export default Container.create(LandingPageContainer, { withProps: true });