import React from 'react';
import useTab2 from './useTab2';

const list = [
  {title: 'tab1', content: 'aa'},
  {title: 'tab2', content: 'bb'},
  {title: 'tab3', content: 'cc'},
]

function UseTabSample2() {
  const { tab, setTabIndex } = useTab2(0, list);
  return (
    <div>
      <h4>useTab2</h4>
      <ul>
        {list.map((item, index) => {
          return (
            <button key={index} onClick={() => setTabIndex(index)}>
              {item.title}
            </button>
          )})
        }
      </ul>
      {tab && <div>{tab.content }</div>}
      <hr />
    </div>
  );
}

export default UseTabSample2;
