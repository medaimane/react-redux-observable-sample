import {ofType} from 'redux-observable';
import {mapTo, delay} from 'rxjs/operators'

export const pingEpic = action$ => 
  action$.pipe(
    ofType('PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
  );