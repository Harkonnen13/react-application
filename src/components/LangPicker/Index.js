

import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';

/**
 * Language selector
 */
class LangPicker extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.popup = React.createRef();
  }
  
  onMouseOver = () => {
    this.setState({ isOpen: true });
  }

  onMouseLeave = () =>{
    this.setState({ isOpen: false });
  }

  select(lang){
    if(lang !== this.props.selected){
      this.props.change(lang);
      this.setState({ isOpen: false });
    }
  }

  renderItem = (lang) =>{
    const hidden = !this.state.isOpen ? 'langPicker-text-hidden' : '';
    return (
      <div key={lang} 
           className='langPicker-item'
           onClick={this.select.bind(this, lang)}>
        <span className={`langPicker-text ${hidden}`}>{lang}</span>
        <div className={`langPicker-flag langPicker-flag-${lang}`}></div>
      </div>
    )
  }

  filter = (l) =>{
    return l !== this.props.selected;
  }

  render() {
    const hide = this.state.isOpen ? '' : 'langPicker-menu-hide';
    return (
      <div className="langPicker"
           onMouseOver={this.onMouseOver}
           onMouseLeave={this.onMouseLeave}>
        { this.renderItem(this.props.selected) }
        <div ref={this.popup} className={`langPicker-menu ${hide}`}>
          { this.props.list.filter(this.filter).map(this.renderItem) }
        </div>
      </div>
    );
  }
}

export default LangPicker;