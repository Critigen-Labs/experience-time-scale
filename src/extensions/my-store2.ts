import { extensionSpec, ImmutableObject, IMState } from 'jimu-core';

export enum MyActionKeys {
  ChangeBool = 'CHANGE_BOOL',
  ChangeNum = 'CHANGE_NUM',
  ChangeStart = 'CHANGE_START',
  ChangeEnd = 'CHANGE_END',
  ChangeMonth = 'CHANGE_MONTH'
}

export interface ChangeBool {
  type: MyActionKeys.ChangeBool;
  val: boolean;
}

export interface ChangeNum {
  type: MyActionKeys.ChangeNum;
  val: number;
}

export interface ChangeStart {
  type: MyActionKeys.ChangeStart;
  val: Date;
}

export interface ChangeEnd {
  type: MyActionKeys.ChangeEnd;
  val: Date;
}

export interface ChangeMonth {
  type: MyActionKeys.ChangeMonth;
  val: string;
}

type ActionTypes = ChangeBool | ChangeNum | ChangeStart | ChangeEnd | ChangeMonth;

interface MyState2 {
  playing: boolean;
  speed: number;
  start: Date;
  end: Date;
  month: string;
}
type IMMyState = ImmutableObject<MyState2>;

declare module 'jimu-core/lib/types/state' {
  interface State {
    myState2?: IMMyState
  }
}

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension {
  id = 'my-local-redux-store-extension';

  getActions() {
    return Object.keys(MyActionKeys).map(k => MyActionKeys[k]);
  }

  getInitLocalState() {
    return {
      playing: false,
      speed: 1,
      start: new Date("1/1/2019"),
      end: new Date("1/8/2019"),
      Month: null
    }
  }

  getReducer() {
    return (localState: IMMyState, action: ActionTypes, appState: IMState): IMMyState => {
      switch (action.type) {
        case MyActionKeys.ChangeBool:
          return localState.set('playing', action.val);
        case MyActionKeys.ChangeNum:
          return localState.set('speed', action.val);
        case MyActionKeys.ChangeStart:
          return localState.set('start', action.val);
        case MyActionKeys.ChangeEnd:
          return localState.set('end', action.val);
        case MyActionKeys.ChangeMonth:
          return localState.set('month', action.val);
        default:
          return localState;
      }
    }
  }

  getStoreKey() {
    return 'myState2';
  }
}