import { fetchCount } from "../features/counter/counterAPI";

let currentState = 0;
let currentListeners = [];

const store = {
    getState: ()=>{
        return currentState
    },
    addByOne: ()=>{
        currentState++;
        currentListeners.forEach(listener => listener(currentState))
    },
    minusByOne: ()=>{
        currentState--
        currentListeners.forEach(listener => listener(currentState))
    },
    addByValue: (value) =>{
        currentState += value;
        currentListeners.forEach(listener => listener(currentState))
    },
    addIfOdd: (amount)=>{
        if (currentState % 2 !== 0) currentListeners += amount;
        currentListeners.forEach(listener => listener(currentState))
    },
    asyncAddByValue: async (value)=>{
        const response = await fetchCount(value);
        currentState += response.data;
        currentListeners.forEach(listener => listener(currentState))
    },
    subscribe: (listener)=>{
        currentListeners.push(listener);
    }
}

export default store