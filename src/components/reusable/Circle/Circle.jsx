import { useEffect, useRef } from 'react';

function Circle() {
  const circleRef = useRef();

  useEffect(() => {
    if (circleRef.current) {
      console.log('circleRef.current = ', circleRef.current);
    }
  }, []);

  const onResize = (entries) => {
    console.log('entries = ', entries);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(onResize);

    if (resizeObserver && circleRef?.current) {
      resizeObserver.observe(circleRef.current);
    }

    return () => {
      if (resizeObserver) {
        console.log('resizeObserver.disconnect() called');
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-[100px] w-full">
      <div className="max-w-[400px] w-full bg-[#f2f3f8] p-10">
        <div
          className="bg-green-500 aspect-square max-w-[200px] w-full rounded-full mx-auto"
          ref={circleRef}
        ></div>
      </div>
    </div>
  );
}

export default Circle;
