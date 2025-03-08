import { useEffect, useState } from 'react';
import moleSvg from '../assets/mole-svg.svg';
export default function Mole({ onClick, id }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 700) + 500;
    const intervalId = setInterval(() => {
      setVisible((prev) => !prev);
    }, randomTime);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className='size-36 relative overflow-hidden' onClick={() => visible && onClick(id)}>
      <img
        className={`w-[80%] transition-all mx-auto ${
          visible ? 'translate-y-0' : 'translate-y-[130%]'
        }`}
        src={moleSvg}
      />
      <div className='bg-orange-950 w-full h-10 z-10 rounded-full absolute bottom-0 '></div>
    </div>
  );
}