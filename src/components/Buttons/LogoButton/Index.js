import React from 'react';
import './Styles.less';

/**
 * Logo button
 * @param {*} className
 * @param {*} href 
 * @param {*} targete
 */
const LogoButton = ({className = "", href = '/', target = ''}) => {
  return(
    <div className={`logo-wrapper ${className}`}>
      <a className='logo' href={href} target={target}/>
    </div>
  )
}

export default LogoButton;