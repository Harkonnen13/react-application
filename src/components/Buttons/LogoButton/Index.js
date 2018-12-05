import React from 'react';

const LogoButton = ({href, target, className}) => {
  return(
    <a className={className} href={href || '/'} target={target}/>
  )
}

export default LogoButton;