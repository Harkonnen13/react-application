import React, { Component, PureComponent } from 'react';

function normalize(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

class ComponentBase extends Component {

  constructor(props){
    super(props);
    this.className = normalize(this.constructor.name);
  }

  render() {
    return 'ComponentBase';
  }
}

class PureComponentBase extends PureComponent {

  constructor(props){
    super(props);
    this.className = normalize(this.constructor.name);
  }

  render() {
    return 'PureComponentBase';
  }
}

export default { ComponentBase, PureComponentBase };