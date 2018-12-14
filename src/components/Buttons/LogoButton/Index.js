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
    <a className={`logo ${className}`} href={href} target={target}/>
  )
}

export default LogoButton;