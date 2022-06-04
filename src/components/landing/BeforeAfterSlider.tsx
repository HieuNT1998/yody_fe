import React, { useState, useRef } from "react";

const BeforeAfterSlider = () => {
  const [slideAmount, setSlideAmount] = useState({ frac: 0.5 });

  const imageContainer = useRef<HTMLDivElement>(undefined);

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX);
  };

  const slide = (xPosition: number): void => {
    const imageContainerBoundingRect = imageContainer.current.getBoundingClientRect();
    setSlideAmount(() => {
      if (xPosition < imageContainerBoundingRect.left) {
        return { frac: 0 };
      } else if (xPosition > imageContainerBoundingRect.right) {
        return { frac: 1 };
      } else {
        return {
          frac:
            (xPosition - imageContainerBoundingRect.left) /
            imageContainerBoundingRect.width,
        };
      }
    });
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    slide(event.touches[0].clientX);
  };

  const handleMouseDown = (event: any): void => {
    window.onmouseup = handleMouseUp;
    window.onmousemove = handleMouseMove;
  };

  const handleMouseUp = (): void => {
    window.onmouseup = undefined;
    window.onmousemove = undefined;
  };

  return (
    <div className="px-24 inset-0 w-full h-full flex items-center justify-center">
      <div
        ref={imageContainer}
        className="max-w-lg w-full mx-auto relative select-none group"
      >
        <img
          src="https://storage.techainer.com/photo-restoration/home/after.png"
          alt=""
          className="pointer-events-none"
          // style={{ height: "40em", width: "30em" }}
        />
        <img
          src="https://storage.techainer.com/photo-restoration/home/before.png"
          alt=""
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: `polygon(0 0, ${slideAmount.frac * 100}% 0, ${
              slideAmount.frac * 100
            }% 100%, 0 100%)`, 
          }}
        />
        <div
          style={{
            left: `${slideAmount.frac * 100}%`,
            touchAction: "none",
          }}
          className="absolute inset-y-0 sm:opacity-0 group-hover:opacity-100"
        >
          <div className="relative h-full hover:opacity-100 opacity-50">
            <div className="inset-y-0 absolute w-0.5 -ml-px bg-white"></div>
            <div
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="w-12 -ml-6 h-12 -mt-6 top-1/2 cursor-pointer rounded-full bg-white absolute flex items-center justify-center shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-gray-500 w-6 rotate-90 transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;