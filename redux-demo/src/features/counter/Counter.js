import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

import store from "../../mini-store/store";

import styles from "./Counter.module.css";

export function Counter() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [count, setCount] = useState(store.getState());
  store.subscribe(setCount);
  const [incrementAmount, setIncrementAmount] = useState("0");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
          onClick={() => {
            store.minusByOne();
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
          onClick={() => {
            store.addByOne();
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementByAmount(incrementValue))}
          onClick={() => {
            store.addByValue(incrementValue);
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // onClick={() => dispatch(incrementAsync(incrementValue))}
          onClick={() => {
            store.asyncAddByValue(incrementValue);
          }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementIfOdd(incrementValue))}
          onClick={() => {
            store.addIfOdd(incrementValue);
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
