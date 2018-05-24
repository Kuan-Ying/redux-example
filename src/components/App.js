import React from 'react';
import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions';
import { countSelector } from '../selectors/countSelector';

function App({count, actions}) {
  return (
    <div>
      <span>{count}</span>
      <button onClick={actions.increment}>+</button>
      <button onClick={actions.decrement}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: countSelector(state)
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    increment, 
    decrement
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
