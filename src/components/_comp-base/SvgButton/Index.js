import React from 'react';

/**
 * Base Svg button
 * @param {*} className 
 * @param {*} href 
 * @param {*} width 
 * @param {*} height
 */
const SvgButton = ({className, href, width, height, children}) => {
  return(
    <a href={href || '/'}>
      <svg xmlns='http://www.w3.org/2000/svg'
           className={className || 'main-svg'}
           width={width} 
           height={height}       
           viewBox='0 0 24 24'>
        {children}
      </svg>
    </a>
  )
}

export default SvgButton;