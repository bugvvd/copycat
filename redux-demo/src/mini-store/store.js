import { fetchCount } from "../features/counter/counterAPI";

let currentState = 0;
let currentListeners = [];

const getState = () => {
  return currentState;
};

const setter = async (type, value) => {
  switch (type) {
    case "addByOne":
      currentState++;
      break;
    case "minusByOne":
      currentState--;
      break;
    case "addByValue":
      currentState += value;
      break;
    case "addIfOdd":
      if (currentState % 2 !== 0) {
        currentState += value;
      }
      break;
    case "asyncAddByValue":
      const response = await fetchCount(value);
      currentState += response.data;
      break;
    default:
      return;
  }
};

const callSetter = async (type, value) => {
  await setter(type, value);
  console.log(currentState);
  currentListeners.forEach((listener) => listener(currentState));
};

const subscribe = (listener) => {
  currentListeners.push(listener);
};

const store = {
  getState,
  callSetter,
  subscribe,
};

export default store;
