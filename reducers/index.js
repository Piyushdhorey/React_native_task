import { combineReducers } from 'redux';

const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  employees: employeeReducer,
});