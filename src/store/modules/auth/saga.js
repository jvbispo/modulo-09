import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { SignInSuccess } from './actions';
import history from '../../../services/history';

export function* handleSignIn({ payload }) {
  const { email, password } = payload;
  toast('opa fionn');

  const response = yield call(api.post, 'session', { email, password });

  console.tron.log(response);

  const { token, user } = response.data;
  console.tron.log({ token, user });

  if (!user.provider) {
    return;
  }

  yield put(SignInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', handleSignIn)]);
