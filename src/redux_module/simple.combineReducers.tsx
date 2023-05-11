import { Reducer } from "./simple.store";

function combineReducers<S, A>(reducers: {
  [K in keyof S]: Reducer<S[K], A>;
}): Reducer<S, A> {
  return (state: S | undefined, action: A): S => {
    const newState = {} as S;

    for (const key in reducers) {
      newState[key as keyof S] = reducers[key](
        state ? (state[key as keyof S] as any) : undefined,
        action
      );
    }

    return newState;
  };
}

export { combineReducers };
