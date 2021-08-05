import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { compose } from "redux";
import { applyMiddleware } from "redux";

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(
  rootReducer
);
