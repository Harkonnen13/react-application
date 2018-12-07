import React from 'react';
import { Route } from 'react-router-dom';

const renderMergedProps = (Component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    <Component {...finalProps}/>
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

export default PropsRoute;