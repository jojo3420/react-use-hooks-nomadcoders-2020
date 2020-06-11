import React, {useReducer} from 'react';


// useReducer 의 가장 큰 장점은 state 변경로직을 외부로 뺄 수 있다는 것!
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      // state.setState({}) 가 아니라 state 를 리턴 하면 된다.!
      return {...state, value: state.value + 1};
    case 'DECREASE':
      return {...state, value: state.value - 1};
    default:
      return state;
  }
}

function UseReducerSample() {
  const [state, dispatch] = useReducer(reducer, {value: 0});
  const [state2, dispatch2] = useReducer(reducer2, {username: '', nickname: ''});

  const increase = () => {
    dispatch({type: 'INCREASE'});
  }
  const decrease = () => {
    dispatch({type: 'DECREASE'});
  }
  return (
    <div>
      <h1>useReducer</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <p>{state.value}</p>
      <hr/>
      <div>
        <h2>useReducer</h2>
        username:
        <input type="text"
               name="username"
               value={state2.username}
               onChange={e => dispatch2(e.target)}
        />
        nickname:
        <input type="text"
               name="nickname"
               value={state2.nickname}
               onChange={e => dispatch2(e.target)}
        />
      </div>
      <div>username: {state2.username}</div>
      <div>nickname: {state2.nickname}</div>
      <hr/>



    </div>
  );
}

function reducer2(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

export default UseReducerSample;
