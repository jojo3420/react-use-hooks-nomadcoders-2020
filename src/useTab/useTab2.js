import React, { useState } from 'react';

function UseTab2(initialIndex, arr) {
 const [index, setTabIndex] = useState(initialIndex);

 if (!arr || !Array.isArray(arr)) {
   throw new Error('arr is not array');
 }

 return {
   tab: arr[index],
   setTabIndex
 }
}

export default UseTab2;
