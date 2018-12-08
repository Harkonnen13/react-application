import React from 'react';

/**
 * Page title
 * @param {*} className 
 */
const PageTitle = ({className, children}) => {
  return (
    <div className={className || ''}>
      <h1>{children || 'Title'}</h1>
      <div style={{border: '1px solid gray'}}/>
    </div>
  );
}

export default PageTitle;