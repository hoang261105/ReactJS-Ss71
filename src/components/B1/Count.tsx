import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../../stores/reducers/countReducer";

export default function Count() {
  const countState = useSelector((state: any) => state);
  const dispatch = useDispatch();

  console.log(countState);
  return (
    <div>
      <p>Giá trị count: {countState.count}</p>
      <button onClick={() => dispatch(increase())}>Tăng</button>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
