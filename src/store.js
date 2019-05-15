import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {pingEpic} from './epics';
import pingpongReducer from './reducers/pingpong'

const epicMiddleware = createEpicMiddleware();

export default createStore(pingpongReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(pingEpic);
