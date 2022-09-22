import React from 'react';

type Props = {
  name: string,
  left: number,
  fill: number,
  value: number,
};

export const TimeItem: React.FC<Props> = (props) => {
  const {
    name,
    left,
    fill,
    value,
  } = props;

  return (
    <div className="time__item">
      <div className="time__name">
        {name}
      </div>
      <div className="time__data">
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
