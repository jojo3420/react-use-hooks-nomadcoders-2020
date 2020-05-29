import React, {useState, useEffect} from 'react';

function UseTitle2(initialTitle) {
  const [title, setTitle] = useState(initialTitle);
  const titleEl = document.querySelector('title');

  useEffect(() => {
    if (titleEl) {
      titleEl.innerText = title;
    }
  }, [title]);

  return setTitle;
}

export default UseTitle2;
