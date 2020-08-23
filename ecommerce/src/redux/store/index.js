import { createStore } from 'redux'
import {reducerApp} from '../reducers';

export const store = createStore(reducerApp);