import produce from 'immer';

export default function auth(
  state = { token: null, signed: false, loading: false },
  action
) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });

    default:
      return state;
  }
}
