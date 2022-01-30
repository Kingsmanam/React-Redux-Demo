import React, {useState} from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counter/counterActions";


const CounterContainer = (props) => {
//   const count = useSelector(state => state.count);
//   const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "70px", justifyContent: "space-between"}}> 
     <div style={{display: "flex"}}>
    Decrease & Increase by :
     <input style={{width: "40px"}} value={number} onChange={e => setNumber(e.target.value)}/> 
     </div>
    <div style={{display: "flex", width: "100px", justifyContent: "space-between"}}>
      <button onClick={() => props.decrement(number)}>-</button>
      {props.count}
      <button onClick={() => props.increment(number)}>+</button>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (number) => dispatch(increment(number)),
    decrement: (number) => dispatch(decrement(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
