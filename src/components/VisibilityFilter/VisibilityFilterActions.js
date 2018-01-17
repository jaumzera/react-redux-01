const all = () => dispatch => {
  console.log('dispatching all');
  return dispatch({ type: 'ALL' });
};

const completed = () => dispatch => {
  return dispatch({ type: 'COMPLETED' });
};

const _new = () => dispatch => {
  return dispatch({ type: 'NEW' });
};

export { all, completed, _new };
