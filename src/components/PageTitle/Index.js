import React from 'react';

const PageTitle = ({className, children}) => {
  return (
    <div className={className || ''}>
      <h1>{children || 'Title'}</h1>
      <div style={{border: '1px solid gray'}}></div>
    </div>
  );
}

export default PageTitle;