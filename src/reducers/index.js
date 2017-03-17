import { combineReducers } from 'redux';

const initialState = {
  counter: 0
}

const countReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
  }
};

const rootReducer = combineReducers({
  count: countReducer
});

export default rootReducer;
