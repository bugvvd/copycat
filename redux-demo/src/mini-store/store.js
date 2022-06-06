import createStore from "../redux-mini/createStore";
import { fetchCount } from "../features/counter/counterAPI";

const setter = async (currentState, type, value) => {
  switch (type) {
    case "addByOne":
      return ++currentState;
    case "minusByOne":
      return --currentState;
    case "addByValue":
      currentState += value;
      return currentState;
    case "addIfOdd":
      if (currentState % 2 !== 0) {
        currentState += value;
      }
      return currentState;
    case "asyncAddByValue":
      const response = await fetchCount(value);
      currentState += response.data;
      return currentState;
    default:
      return;
  }
};

const store = createStore(setter);

export default store;
