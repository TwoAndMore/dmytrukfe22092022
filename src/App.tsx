import React from 'react';
import './App.scss';
import { TimeChart } from './components/TimeChart/TimeChart';

export const App: React.FC = () => {
  return (
    <div className="app">
      <TimeChart />
    </div>
  );
};
