export default function createStore(setter) {
    let currentState = 0;
    let currentListeners = [];
    const getState = () => {
        return currentState;
      };
      const callSetter = async (type, value) => {
        currentState = await setter(currentState, type, value);
        console.log(currentState);
        currentListeners.forEach((listener) => listener(currentState));
      };
      
      const subscribe = (listener) => {
        currentListeners.push(listener);
      };
            
    return {
        getState,
        callSetter,
        subscribe
    }
}