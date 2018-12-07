import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import { connect } from 'react-redux';

import MasterPage, { 
  mapCommonProps, 
  mapCommonDispatch 
} from '../_base/MasterPage';

import PageTitle from '../../components/PageTitle';

class AboutPage extends MasterPage {

  //#region Render methods

  renderPost(post, idx){
    return (
      <p key={idx}>{post}</p>
    );
  }

  renderContent = () => {
    return (
      <div className='aboutPage'>
        <div className={`aboutPage-body ${this.props.wrapperClass}`}>
            <PageTitle className='aboutPage-title'>
              {this.props.localization.aboutPage.title}
            </PageTitle>
            <div className='aboutPage-text'>
              {this.props.localization.aboutPage.posts.map(this.renderPost)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
