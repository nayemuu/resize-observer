import { useEffect, useRef } from 'react';
import Navbar from '../../components/reusable/Navbar/Navbar';
import Portal from '../../components/reusable/Portal/Portal';

function Hscreen() {
  const hContainerRef = useRef();

  const onResize = (entries) => {
    console.log('entries = ', entries);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(onResize);

    if (resizeObserver && hContainerRef?.current) {
      resizeObserver.observe(hContainerRef.current);
    }

    return () => {
      if (resizeObserver) {
        console.log('resizeObserver.disconnect() called inHscreen');
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Portal>
        <div
          ref={hContainerRef}
          className="bg-gray-500 h-screen w-[300px] fixed top-0"
        ></div>
      </Portal>
    </div>
  );
}

export default Hscreen;
