import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';

const INI_STATE = {
  currentFilter: 'ALL',
};

const visibilityReducer = (state = INI_STATE, action) => {
  switch (action.type) {
    case 'ALL':
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

const mapStateToProps = state => {
  return { ...state.visibilityReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    all: () => {
      dispatch({ type: 'ALL' });
    },
    completed: () => {
      dispatch({ type: 'COMPLETED' });
    },
    _new: () => {
      dispatch({ type: 'NEW' });
    },
  };
};

export { visibilityReducer };
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
