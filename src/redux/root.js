import { combineReducers } from 'redux';

import auth from './reducers/auth';
import race from './reducers/results';

export default combineReducers({
    auth,
    race
});