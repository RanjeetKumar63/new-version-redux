import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handelDecrementClick() {
    dispatch(decrement());
  }
  return (
    <div className="container">
      <h1>Counter App</h1>
      <br />
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handelDecrementClick}>-</button>
    </div>
  );
};

export default App;
