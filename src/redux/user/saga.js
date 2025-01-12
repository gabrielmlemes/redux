import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./slice";

import axios from "axios";
// API USERS: https://jsonplaceholder.typicode.com/users/

// o saga é um middleware que quando dispara uma action, ele fica no meio do caminho e faz alguma coisa
// no caso aqui está chamando a função fetchUsers
function* fetchUsers() {
  try {
    yield delay(2000)

    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/')
    yield put(fetchUsersSuccess(response.data))
    
  } catch (error) {
    yield put(fetchUsersFailure(error.message))
    
  }
}

export default all([takeLatest("user/fetchUsers", fetchUsers)]);
