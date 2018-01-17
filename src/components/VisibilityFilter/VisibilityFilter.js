import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLink from '../FilterLink/FilterLink';
import { all, completed, _new } from './VisibilityFilterActions';

const INI_STATE = {
  currentFilter: 'ALL',
};

const visibilityReducer = (state = INI_STATE, action) => {
  switch (action.type) {
    case 'ALL':
      console.log('reducer all');
      return { ...state, currentFilter: 'ALL' };
    case 'COMPLETED':
      return { ...state, currentFilter: 'COMPLETED' };
    case 'NEW':
      return { ...state, currentFilter: 'NEW' };
    default:
      return state;
  }
};

class VisibilityFilter extends Component {
  all = () => {
    this.props.all();
  };

  completed = () => {
    this.props.completed();
  };

  _new = () => {
    this.props._new();
  };

  render() {
    return (
      <div>
        <span>Show: </span>
        <FilterLink
          label="All"
          action={this.all}
          selected={this.props.currentFilter === 'ALL'}
        />{' '}
        <FilterLink
          label="New"
          action={this._new}
          selected={this.props.currentFilter === 'NEW'}
        />{' '}
        <FilterLink
          label="Completed"
          action={this.completed}
          selected={this.props.currentFilter === 'COMPLETED'}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { ...store.visibilityReducer };
};

const mapDispatchToProps = {
  all,
  completed,
  _new,
};

export { visibilityReducer };
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
