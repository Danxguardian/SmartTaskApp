import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./Reducers";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
export default createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
