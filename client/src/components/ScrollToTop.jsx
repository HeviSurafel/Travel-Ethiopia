import  { useState } from 'react';

import { FaArrowUp } from "react-icons/fa";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  window.addEventListener('scroll', () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });

  const toTop = () => {
    window.scroll({ top: 0 });
  };

  return (
    <div
      scrollState={scrollState}
      className={`${
        scrollState ? 'block' : 'none'
      } fixed bottom-[1rem] right-[2rem] z-[99]`}
    >
      <FaArrowUp className="w-[35px] h-[35px] bg-[rgb(243, 111, 9)]  p-[0.3rem] cursor-pointer rounded-[50%] sm:bottom-[1.5rem] right-[1rem]"
        alt=""
        onClick={toTop}
      />
    </div>
  );
}
