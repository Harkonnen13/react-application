import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import { connect } from 'react-redux';
import MasterPage, { 
  mapCommonProps, 
  mapCommonDispatch 
} from '../_base/MasterPage/Index.js';

/**
 * Landing page
 */
class LandingPage extends MasterPage {

  //#region Render methods

  renderHint(hint, idx){
    return (
      <li key={idx}>{hint}</li>
    );
  }

  renderPost(post, idx){
    return (
      <p key={idx}>{post}</p>
    );
  }

  renderContent = () => {
    return (
      <div className='landingPage'>
        <div className='landingPage-body'>
          <div className='landingPage-intro'>
            <div className='landingPage-info'>
              <div className='landingPage-title'>
                <span className='font-weight-bold'>Pizza Logo</span>
                {` — ${this.props.localization.landingPage.title}`} 
              </div>
              <ul>
                {this.props.localization.landingPage.hints.map(this.renderHint)}
              </ul>
            </div>
          </div>
          <div className='landingPage-text'>
            <div className='container'>
              <div className='h2'>
                {this.props.localization.landingPage.info.title}
              </div>
                {this.props.localization.landingPage.info.posts.map(this.renderPost)}
              </div>
            </div>
        </div>
      </div>
    );
  };

  //#endregion Render methods
}


function mapStateToProps(state){
  return mapCommonProps({}, state);
}

function mapDispatchToProps(dispatch){
  return mapCommonDispatch({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
