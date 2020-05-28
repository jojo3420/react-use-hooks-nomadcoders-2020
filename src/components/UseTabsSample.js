import React, {useState} from 'react';
import useTabs from '../hooks/useTabs';


const tabs = [
  {
    title: 'tab0',
    content: 'this is tab0 contents',
  },
  {
    title: 'tab1',
    content: 'this is tab1 contents',
  },
  {
    title: 'tab3',
    content: 'this is tab3 contents',
  }
];

function UseTabsSample() {
  const {tab, setIndex} = useTabs(0, tabs);

  // const [ index, setIndex2 ] = useState(0);
  return (
    <>
      <div>
        <h2>useTabs</h2>
        {tabs.map((tab, index) => {
          return <button onClick={() => setIndex(index)}>{tab.title}</button>
        })}
        <p>{tab.content}</p>
      </div>
      <hr/>
      {/*<div>*/}
      {/*  {tabs.map((tab, index) => {*/}
      {/*    return <button onClick={() => setIndex2(index)}>{tab.title}</button>*/}
      {/*  })}*/}
      {/*  <p>{tabs[index].content}</p>*/}
      {/*</div>*/}
      {/*<hr />*/}
    </>
  );
}

export default UseTabsSample;
