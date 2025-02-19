import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './reducers/counter';
// import isLoggedReducer from './reducers/isLogged';

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
    reducer: {
        // counter: counterReducer,
        // isLogged: isLoggedReducer
    }
});

export default store;
