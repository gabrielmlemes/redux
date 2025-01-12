import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserByIdSuccess,
} from "./slice";

import axios from "axios";
// API USERS: https://jsonplaceholder.typicode.com/users/

// o saga é um middleware que quando dispara uma action, ele fica no meio do caminho e faz alguma coisa
// no caso aqui está chamando a função fetchUsers. Usado mais quando voce precisa fazer
// uma requisição, mais pra algo assíncrono. Caso não seja assíncrono, pode manipular os dados
// diretamente no slice mesmo
function* fetchUsers() {
  try {
    yield delay(2000);

    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* fetchUserById(action) {
  try {
    const userId = action.payload;
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    yield put(fetchUserByIdSuccess(response.data));
  } catch (error) {
    console.log(error.message);
  }
}

export default all([
  takeLatest("user/fetchUsers", fetchUsers),
  takeLatest("user/fetchUserById", fetchUserById),
]);
