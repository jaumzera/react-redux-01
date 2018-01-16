import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        {this.props.currentFilter !== 'ALL' && (
          <a href="#ALL" onClick={this.all}>
            All
          </a>
        )}{' '}
        {this.props.currentFilter !== 'NEW' && (
          <a href="#NEW" onClick={this._new}>
            New
          </a>
        )}{' '}
        {this.props.currentFilter !== 'COMPLETED' && (
          <a href="#COMPLETED" onClick={this.completed}>
            Completed
          </a>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('visibility filter state: ', state);
  return {
    currentFilter: state.filter.currentFilter,
  };
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
