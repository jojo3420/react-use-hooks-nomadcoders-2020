import React, {useState, useMemo, useCallback} from 'react';


function UseMemoSample(props) {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);



  // const onChange = e => {
  //   console.log('onChange... handler');
  //   setNumber(e.target.value);
  // }
  //
  // const onInsert = () => {
  //   console.log('insert handler.');
  //   if (number && !Number.isNaN(parseInt(number, 10))) {
  //     const newList = list.concat(parseInt(number, 10));
  //     setList(newList);
  //     setNumber('');
  //   }
  // }

  // 최적화
  const onChange = useCallback((e) => {
      console.log('onChange... handler');
      setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될때만 함수 생성

  const onInsert = useCallback(() => {
    console.log('insert handler.');
    if (number && !Number.isNaN(parseInt(number, 10))) {
      const newList = list.concat(parseInt(number, 10));
      setList(newList);
      setNumber('');
    }
  },[number, list]); // number or list 가  바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>useMemo</h1>
      <input type="text" value={number} onChange={onChange}/>
      <button onClick={onInsert}>insert</button>
      <ul>
        {list.map((number, idx) => <li key={idx}>{number}</li>)}
      </ul>
      {/*<p>average: {getAverage(list)}</p>*/}
      <p>average: {avg}</p>
    </div>
  );
}


function getAverage(numbers) {
  console.log('계산중...', numbers);
  if (!numbers) return;
  if (numbers && numbers.length === 0) return;

  const sum = numbers.reduce((a, b) => a + b);
  const avg = sum / numbers.length;
  console.log(`avg: ${avg}`);
  return avg;
}

export default UseMemoSample;
