import { combineReducers } from 'redux';

import faculty from './faculty';
import alumni from './alumni';
import auth from './auth';
export default combineReducers({
    faculty, alumni, auth
})