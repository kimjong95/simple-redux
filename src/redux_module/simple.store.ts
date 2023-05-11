export type Reducer<S, A> = (state: S, action: A) => S;

export interface Store<S, A> {
  getState: () => S;
  dispatch: (action: A) => void;
  subscribe: (listener: () => void) => () => void;
}

function createStore<S, A>(reducer: Reducer<S, A>): Store<S, A> {
  //
  let state: S;
  const listeners: (() => void)[] = [];

  const getState = (): S => state;
  const dispatch = (action: A): void => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  const subscribe = (listener: () => void): (() => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  dispatch({} as A);

  return { getState, dispatch, subscribe };
}

export { createStore };
