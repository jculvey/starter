import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment} from 'actions';

export default class App extends Component {
  render() {
    return (
      <div>
        <CountContainer />
      </div>
    );
  }
}



class CountContainer extends Component {
  render() {
    return (
      <div>
        <Count
          value={this.props.count}
          onIncrement={this.props.increment}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.counter
  }
};
CountContainer = connect(mapStateToProps, {increment})(CountContainer)




const Count = (props) =>  {
  return (
    <div>
      <div>The current count is: {props.value}</div>
      <div>
        <button onClick={props.onIncrement}>Add 1</button>
      </div>
    </div>
  );
}

