import {createStore} from 'redux';
  
import RepositoryReducer from './RepositoryReducer';

const store=createStore(RepositoryReducer);
  
export default store;