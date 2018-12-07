import React from 'react';
import './Styles.less';

const LogoButton = ({href, target, className}) => {
  return(
    <div className={`logo-wrapper ${className || ''}`}>
      <a className='logo' href={href || '/'} target={target}/>
    </div>
  )
}

export default LogoButton;