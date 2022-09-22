import React, { useEffect, useRef } from 'react';

type Props = {
  name: string,
  left: number,
  fill: number,
  value: number,
  setWidth: CallableFunction,
};

export const TimeItem: React.FC<Props> = (props) => {
  const fillRef = useRef<HTMLDivElement>(null);

  const {
    name,
    left,
    fill,
    value,
    setWidth,
  } = props;

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (fillRef.current) {
        setWidth(fillRef.current.clientWidth);
      }
    });
  }, []);

  return (
    <div className="time__item">
      <div className="time__name">
        {name}
      </div>
      <div className="time__data" ref={fillRef}>
        <div
          className="time__data-fill"
          style={{
            left: `${left}px`,
            width: `${fill}px`,
          }}
        >
          <div className="time__data-value">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
