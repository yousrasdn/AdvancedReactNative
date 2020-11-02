import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    // autoRehydrate()
  )
);

persistStore(store);

export default store;