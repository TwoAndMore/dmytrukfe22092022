import './TimeChart.scss';
import React,
{
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import timeSpent from '../../api/time.json';
import { spentTime } from '../../types/spentTime';
import { TimeItem } from '../TimeItem/TimeItem';

export const TimeChart: React.FC = () => {
  const [times, setTimes] = useState<spentTime[]>(timeSpent);
  const [areaWidth, setAreaWidth] = useState(400);

  const autoTimeClick = 31800;

  const wholeTime = times.reduce((a, b) => a + b.time, 0);

  const elementsWidth = useMemo((() => {
    return times.map(time => Math.round((time.time * areaWidth) / wholeTime));
  }), [times, wholeTime, areaWidth]);

  const offsetLeft = useCallback((index: number) => {
    if (index === 0) {
      return 0;
    }

    return elementsWidth.slice(0, index).reduce((a, b) => a + b);
  }, [elementsWidth]);

  const handleRandomClick = () => {
    setTimes(prevState => prevState.map(oldTime => {
      return { ...oldTime, time: +(Math.random() * 10).toFixed(2) };
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRandomClick();
    }, autoTimeClick);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="time">
      <h2 className="time__title">
        spent time (seconds)
      </h2>

      <div className="time__chart" data-testid="time-chart">
        {times.map((time, index) => (
          <TimeItem
            name={time.name}
            left={offsetLeft(index)}
            fill={elementsWidth[index]}
            value={times[index].time}
            setWidth={setAreaWidth}
            key={time.name + time.time}
          />
        ))}
      </div>

      <button
        type="button"
        className="time__button"
        onClick={handleRandomClick}
        data-testid="random-btn"
      >
        RANDOM
      </button>
    </div>
  );
};
