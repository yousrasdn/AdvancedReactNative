import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likedJobs from './likes_reducer';

const config = {
    key: 'root',
    whitelist: ['likedJobs'],
    storage: AsyncStorage
  }

export default persistCombineReducers(config, {
    auth, jobs, likedJobs
});