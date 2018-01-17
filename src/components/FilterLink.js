import React, { Component } from 'react';

class FilterLink extends Component {
  render() {
    console.log('filter link props ', this.props);
    if (!this.props.selected) {
      return (
        <a href={'#' + this.props.label} onClick={this.props.action}>
          {this.props.label}
        </a>
      );
    } else {
      return <span>{this.props.label}</span>;
    }
  }
}

export default FilterLink;
